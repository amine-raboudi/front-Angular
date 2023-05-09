import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(    private dialogRef: MatDialogRef<EditClientComponent>, private clientService: ClientService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
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
    
    this.clientService.updateUser(id, data).subscribe(response => {
      console.log(response);
    });
    this.dialogRef.close(data);
    Swal.fire({
      icon: 'question',
      title: 'Updating',
      text: 'Are you sure to update this client ? ',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      }).then((result) => {
      if (result.isConfirmed) {
    
    this.router.navigateByUrl('/admin/clients', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
      }});
};}
