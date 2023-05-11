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

date = new Date();


  constructor() { 
   

  }
  
  ngOnInit(): void {
    
  }
  navigateToDashBoard(){
    this.loadDash=true;
  }
  navigateToCleints(){
    this.loadCl=true;
  }
  navigateToAgence(){
    this.loadAg=true;
  }
  navigateTo(x:number){
    if(x==1){
    this.loadDash=true;
    this.loadCl=false;
    this.loadAg=false;
    }
    if(x==2){
      this.loadDash=false;
      this.loadCl=true;
      this.loadAg=false;
      }
      if(x==3){
        this.loadDash=false;
        this.loadCl=false;
        this.loadAg=true;
        }
  }
}
