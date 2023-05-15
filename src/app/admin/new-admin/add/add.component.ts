import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NewAdminService } from '../new-admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  email: any;
  MailSended:any;
  constructor(
    private dialogRef: MatDialogRef<AddComponent>,
    private NaService: NewAdminService,
    private router: Router, 
    private _snackBar: MatSnackBar,

  ) {
   
  }

  onCancel() {
    this.dialogRef.close();
  }
  PostUser() {
    const data = { 
      email: this.email,
      MailSended:false
     
     };
     console.log(data);
   
    
    Swal.fire({
      icon: 'question',
      title: 'Adding',
      text: 'Are you sure to add this Admin ?',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.NaService.addUser(data).subscribe(response => {
          console.log(response);
        });
        this.dialogRef.close(data);
        this.openSnackBar('Admin added','OK');

      }});
}

openSnackBar(message: string, action: any) {
      
  this._snackBar.open(message, action, {
    duration: 2000,
    panelClass: 'blue-snackbar'
  });
}


}
