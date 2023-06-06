import { Component, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminsService } from '../admins.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-admins',
  templateUrl: './edit-admins.component.html',
  styleUrls: ['./edit-admins.component.scss']
})
export class EditAdminsComponent {
  constructor(        private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditAdminsComponent>, private adminService: AdminsService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  updateUser(id:any,data:any) {
    this.adminService.getUserById(id).subscribe(() => {
      this.data = data;
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
        this.adminService.updateUser(id, data).subscribe(response => {
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
