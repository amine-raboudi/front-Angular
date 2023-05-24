import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../client/client.service';
import { AgenceService } from '../../agence/agence.service';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../../offer/offer.component';


@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent {
  users: any;
  Search=false;
  price: any;
  dateStart:any;
  dateEnd:any;
  category:any;
  active:any;
  clientID:any;

  data1:any;
  data2:any;
  data3:any
  constructor(private ClientService: ClientService,
    private AgenceService: AgenceService,
 private _snackBar: MatSnackBar,  
 private http: HttpClient,
 private dialogRef: MatDialogRef<EditReservationComponent>, private ReservationService: ReservationService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  openSnackBar(message: string, action: any) {
      
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }
  ngOnInit() {
    console.log(this.data);
    
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
  

  updateUser(id:any,data:any) {
    this.ReservationService.getReservationById(id).subscribe(() => {
      this.data = data;
      console.log(data);
    
    });
    
  
    Swal.fire({
      icon: 'question',
      title: 'Updating',
      text: 'Are you sure to update this Offe ? ',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      }).then((result) => {
      if (result.isConfirmed) {
      this.ReservationService.updateReservation(id, data).subscribe(response => {
      console.log(response);
    });
    this.dialogRef.close(data);
        this.openSnackBar('Offe updated','OK');
      }});
};
}
