import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AgenceService } from '../agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.scss']
})
export class AddAgenceComponent {
  email: any;
  password: any;
  is_verified: any;
  status: any;

  constructor(
    private dialogRef: MatDialogRef<AddAgenceComponent>,
    private agenceService: AgenceService,
    private router: Router, 
    private _snackBar: MatSnackBar,

  ) {
   
  }

  ngOnInit() {
    
  
}

  

  onCancel() {
    this.dialogRef.close();
  }
  PostUser() {
    const data = { 
      email: this.email,
      password:this.password,
      roles:["ROLE_AGENT"],
      status:this.status
     };
     console.log(data);
   
    
    Swal.fire({
      icon: 'question',
      title: 'Adding',
      text: 'Are you sure to add this agence ?',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.agenceService.addUser(data).subscribe(response => {
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
