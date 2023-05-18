import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.scss']
})
export class AddofferComponent {
  price: any;
  dateStart:any;
  dateEnd:any;
  category:string = '1';
  active:any;

  constructor(
    private dialogRef: MatDialogRef<AddofferComponent>,
    private OfferService: OfferService,
    private router: Router, 
    private _snackBar: MatSnackBar,

  ) {
    
  }

  ngOnInit() {
    
  
}

  

  onCancel() {
    this.dialogRef.close();
  }
  PostOffer() {
    const data = { 
      price: this.price,
      dateStart:this.dateStart,
      dateEnd:this.dateEnd,
      category:this.category,
      active:false,

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
        this.OfferService.addOffer(data).subscribe(response => {
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