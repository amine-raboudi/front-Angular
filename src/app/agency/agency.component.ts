import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { AgencyService } from './agency.service';
import { Token } from '@angular/compiler';
import { DataStorageService } from '../data-storage.service';
import { EditAgenceComponent } from '../admin/agence/edit-agence/edit-agence.component';
import { MatDialog } from '@angular/material/dialog';
import { EditAgencyComponent } from './edit-agency/edit-agency.component';

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
  token:any
  password:any
  persistedData:any
  
    constructor(private dialog: MatDialog,private dataStorageService: DataStorageService,private route: ActivatedRoute,private router: Router,private authService: LoginService,private agService: AgencyService) { 
      
     
  
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
      this.persistedData = this.dataStorageService.getAg();

     this.agService.getAg(this.persistedData.email).subscribe((response)=>{
        this.data=response;
        
       

       
        
      });
    }
    openEditUserDialog(data:any,id:any):void {
 
  
      
        const dialogRef = this.dialog.open(EditAgencyComponent,{
          data:this.data,
          width : '950px',
          height : '550px',
          panelClass : 'my-dialog-class'
        });
        dialogRef.afterClosed().subscribe()
     
    
     
    } 


    logout(): void {
      this.authService.logoutAg();
      
      
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
