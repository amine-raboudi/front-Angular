import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AgenceService } from '../agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.scss']
})
export class EditAgenceComponent {
  constructor(        private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditAgenceComponent>, private clientService: AgenceService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  updateUser(id:any,data:any) {
    this.clientService.getUserById(id).subscribe(() => {
      this.data = data;
      console.log(id);
    
    });
    
    
    Swal.fire({
      icon: 'question',
      title: 'Updating',
      text: 'Are you sure to update this agence ? ',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.updateUser(id, data).subscribe(response => {
          console.log(response);
        });
        this.dialogRef.close(data);
        this.openSnackBar('agence updated','OK');

      }});
};

onCancel() {
  this.dialogRef.close();
}
openSnackBar(message: string, action: any) {
      
  this._snackBar.open(message, action, {
    duration: 2000,
    panelClass: 'blue-snackbar'
  });
}
}
