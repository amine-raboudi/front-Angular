import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../../offer/offer.component';
import { ClientService } from '../../client/client.service';
import { AgenceService } from '../../agence/agence.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {
  Agent: any;
  Client:any;
  Offer:any;
  data1:any;
  data2:any;
  data3:any
  email:any;
  offers:any;
  
  selectedValue: string = "option2";
  constructor(
    private dialogRef: MatDialogRef<AddReservationComponent>,
    private ReservationService: ReservationService,
    private ClientService: ClientService,
    private AgenceService: AgenceService,

    private router: Router, 
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    
  }

  ngOnInit() {
    this.http.get<Offer[]>('http://127.0.0.1:8000/offer').subscribe(data => {
      this.data1 = data;   
  });
this.ClientService.getUsers().subscribe(data=>{
  this.data2=data;
})
this.AgenceService.getUsers().subscribe(data=>{
  this.data3=data;
})


  
}

  

  onCancel() {
    this.dialogRef.close();
  }
  PostReservation() {
    const data = { 
      Offer: this.Offer,
      Client:this.Client,
      Agent:this.Agent,
      

    };
     console.log(data);
   
    
    Swal.fire({
      icon: 'question',
      title: 'Adding',
      text: 'Are you sure to add this Offer ?',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ReservationService.addReservation(data).subscribe(response => {
          console.log(response);
        });
        this.dialogRef.close(data);
        this.openSnackBar('agence added','OK');

      }});
}

openSnackBar(message: string, action: any) {
      
  this._snackBar.open(message, action, {
    duration: 2000,
    panelClass: 'blue-snackbar'
  });
}
}
