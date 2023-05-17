import { Component } from '@angular/core';
import { AdminsService } from '../admins/admins.service';
import { computeStyles } from '@popperjs/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data:any;
  countAd:any;
  countCli:any;
  countAg:any;
  countOff:any;
  countR:any;
  countALL:any;

  constructor(private admin: AdminsService,private http: HttpClient) {

   }


  ngOnInit():void{
    this.countAdmin();
    this.countOffr();
    this.countAgn();
    this.countRes();
    this.countCl();

    
    
      
  }
  countAdmin(): void {
    const apiUrl = 'http://127.0.0.1:8000/adminAll'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.countAd = data.length;
        console.log('Count:', this.countAd);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  countCl(): void {
    const apiUrl = 'http://127.0.0.1:8000/clientAll'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.countCli = data.length;
        console.log('Count:', this.countCli);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  countAgn(): void {
    const apiUrl = 'http://127.0.0.1:8000/agenceAll'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.countAg = data.length;
        console.log('Count:', this.countAg);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  countOffr(): void {
    const apiUrl = 'http://127.0.0.1:8000/offer/'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.countOff = data.length;
        console.log('Count:', this.countOff);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  countRes(): void {
    const apiUrl = 'http://127.0.0.1:8000/adminAll'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.countR = data.length;
        console.log('Count:', this.countR);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  countAll(): number {
    this.countALL=this.countAd+this.countAg+this.countCli+this.countOff+this.countR
    return  this.countALL
  }
}
