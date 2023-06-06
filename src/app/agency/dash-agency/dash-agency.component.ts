import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from '../off-ag/off-ag.component';
import { Reservation } from '../res-ag/res-ag.component';

export interface User {
  id: string;
  email: string;
  password:string;
  roles:[];
  is_verified:boolean;
}
@Component({
  selector: 'app-dash-agency',
  templateUrl: './dash-agency.component.html',
  styleUrls: ['./dash-agency.component.scss']
})



export class DashAgencyComponent implements OnInit{
  countCli:any;
  countOff:any;
  countR:any;
  dataAg:any
  users: any;
  dataOff:any
  dataCli:any
 
  @Input() message: any;

  searchQuery: string = '';




  displayedColumns: string[] = ['id', 'Price', 'DateStart','DateEnd','Category','Agent','Active'];
  dataSource = new MatTableDataSource<Offer>();

  constructor( private agService: AgencyService ,private http: HttpClient) {

  }
  ngOnInit():void{
    
    this.countOffr(this.message);
    this.countRes(this.message);
    this.countCl(this.message);

    this.agService.getAg(this.message).subscribe(data=>{
      this.dataAg=data;
      this.http.get<Offer[]>('http://127.0.0.1:8000/offer/offAg/'+ this.dataAg[0].id).subscribe(data => {
      
      this.dataSource.data = data;
    
      
  })
})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }   
  
  countCl(message:any): void {
    
    this.agService.getAg(message).subscribe(data=>{
      
      this.dataAg=data;
      this.http.get<User[]>('http://127.0.0.1:8000/reservation/agenceCli/'+ this.dataAg[0].id).subscribe(data => {
      
      this.countCli=data.length      
    });
    })
    
  }

  countOffr(message:any): void {
    this.agService.getAg(message).subscribe(data=>{
      this.dataAg=data;
      
      this.http.get<Offer[]>('http://127.0.0.1:8000/offer/offAg/'+ this.dataAg[0].id).subscribe(data => {
      
      this.countOff = data.length;
  })
})
}
  countRes(message:any): void {
    this.agService.getAg(message).subscribe(data=>{
      this.dataAg=data;
      this.http.get<Reservation[]>('http://127.0.0.1:8000/reservation/resAg/'+ this.dataAg[0].id).subscribe(data => {
      
      this.countR = data.length;
    });
    })
  }

}
