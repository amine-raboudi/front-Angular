import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AgenceService } from '../../agence/agence.service';


import { HttpClient } from '@angular/common/http';
import { Offer } from '../offer.component';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.scss']
})
export class EditofferComponent {
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
  data3:any;
  dataAg:any;

  constructor(
 private _snackBar: MatSnackBar,  
 private http: HttpClient,
 private AgenceService: AgenceService,
 private dialogRef: MatDialogRef<EditofferComponent>, private OfferService: OfferService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  openSnackBar(message: string, action: any) {
      
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }
  ngOnInit() {
    this.AgenceService.getUsers().subscribe(data=>{
      this.dataAg=data;
    })
    
    
  }
  onCancel() {
    this.dialogRef.close();
  }
  

  updateUser(id:any,data:any) {
    this.OfferService.getOfferById(id).subscribe(() => {
      this.data = data;
    
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
      this.OfferService.updateOffer(id, data).subscribe();
    this.dialogRef.close(data);
        this.openSnackBar('Offe updated','OK');
      }});
};
}
