import { Component } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  loadDash=true;
loadCl=false;
loadAg=false;
loadAd=false;
loadNA=false;

today:any;
date = new Date();


  constructor() { 
   

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
console.log(this.date); 
  }
 

  navigateTo(x:number){
    if(x==1){
    this.loadDash=true;
    this.loadCl=false;
    this.loadAg=false;
    this.loadAd=false;
    this.loadNA=false;

    }
    if(x==2){
      this.loadDash=false;
      this.loadCl=true;
      this.loadAg=false;
      this.loadAd=false;
      this.loadNA=false;


      }
      if(x==3){
        this.loadDash=false;
        this.loadCl=false;
        this.loadAg=true;
        this.loadAd=false;
        this.loadNA=false;


        }
        if(x==4){
          this.loadDash=false;
          this.loadCl=false;
          this.loadAg=false;
          this.loadAd=true;
          this.loadNA=false;


          }
          if(x==5){
            this.loadDash=false;
            this.loadCl=false;
            this.loadAg=false;
            this.loadAd=false;
            this.loadNA=true;
  
  
            }
  }
}
