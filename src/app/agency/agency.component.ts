import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { AgencyService } from './agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent {
  loadDash=true;
  loadCl=false;
  loadAg=false;
  loadAd=false;
  loadNA=false;
  loadOf=false;
  loadR=false;
  
  
  today:any;
  date = new Date();
  email:any;
  id:any;
  data:any
  idAg:any
  
    constructor(private route: ActivatedRoute,private router: Router,private authService: LoginService,private agService: AgencyService) { 
      const navigationState = this.router.getCurrentNavigation()?.extras?.state;
      if (navigationState && navigationState['data']) {
        this.email = navigationState['data'].email;

      }
     
  
    }
    
    ngOnInit(): void {
      this.today = new Date();
  
  const options = { 
    timeZone: 'Africa/Tunis' ,
    hour12: false,
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }; // change to your desired time zone
      this.date=this.today.toLocaleString('en-US', options);

      this.agService.getAg(this.email).subscribe(data=>{
        this.data=data;
       

       
        
      });
      
    }
   


    logout(): void {
      this.authService.logout();
    }
  
    navigateTo(x:number){
      if(x==1){
      this.loadDash=true;
      this.loadCl=false;
      this.loadAg=false;
      this.loadAd=false;
      this.loadNA=false;
      this.loadOf=false;
      this.loadR=false;
  
      
  
  
      }
      if(x==2){
        this.loadDash=false;
        this.loadCl=true;
        this.loadAg=false;
        this.loadAd=false;
        this.loadNA=false;
        this.loadOf=false;
        this.loadR=false;
  
  
  
  
        }
        if(x==3){
          this.loadDash=false;
          this.loadCl=false;
          this.loadAg=true;
          this.loadAd=false;
          this.loadNA=false;
          this.loadOf=false;
          this.loadR=false;
  
  
  
  
          }
          if(x==4){
            this.loadDash=false;
            this.loadCl=false;
            this.loadAg=false;
            this.loadAd=true;
            this.loadNA=false;
            this.loadOf=false;
            this.loadR=false;
  
  
  
  
            }
            if(x==5){
              this.loadDash=false;
              this.loadCl=false;
              this.loadAg=false;
              this.loadAd=false;
              this.loadNA=true;
              this.loadOf=false;
              this.loadR=false;
  
           }
           if(x==6){
            this.loadDash=false;
            this.loadCl=false;
            this.loadAg=false;
            this.loadAd=false;
            this.loadNA=false;
            this.loadOf=true;
            this.loadR=false;
  
            }
            if(x==7){
              this.loadDash=false;
              this.loadCl=false;
              this.loadAg=false;
              this.loadAd=false;
              this.loadNA=false;
              this.loadOf=false;
              this.loadR=true;
    
              }
    }
    

}
