import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent {
  users: any;
  Search=false;
  id: any;
  idf:any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  clientID:any;
  constructor( private _snackBar: MatSnackBar,   private dialogRef: MatDialogRef<EditClientComponent>, private clientService: ClientService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  openSnackBar(message: string, action: any) {
      
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }
  ngOnInit() {
    
  }
  onCancel() {
    this.dialogRef.close();
  }
  

  updateUser(id:any,data:any) {
    this.clientService.getUserById(id).subscribe(() => {
      this.data = data;
      console.log(id);
    
    });
    
  
    Swal.fire({
      icon: 'question',
      title: 'Updating',
      text: 'Are you sure to update this client ? ',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      }).then((result) => {
      if (result.isConfirmed) {
      this.clientService.updateUser(id, data).subscribe(response => {
      console.log(response);
    });
    this.dialogRef.close(data);
        this.openSnackBar('client updated','OK');
      }});
};}
