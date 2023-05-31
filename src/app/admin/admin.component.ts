import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { DataStorageService } from '../data-storage.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  persistedData: any;

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
password:any
token:any
roles:any

  constructor(private dataStorageService: DataStorageService,private route: ActivatedRoute,private router: Router,private authService: LoginService) { 
   
   

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
this.persistedData = this.dataStorageService.getAd();
console.log(this.persistedData)

  }

  logout(): void {
        this.dataStorageService.clearAd();
        this.authService.logoutAd();
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
