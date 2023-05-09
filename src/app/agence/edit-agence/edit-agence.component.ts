import { Component, Inject } from '@angular/core';
import { AgenceService } from '../agence.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.scss']
})
export class EditAgenceComponent {
  constructor(    private dialogRef: MatDialogRef<EditAgenceComponent>, private clientService: AgenceService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
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
      text: 'Are you sure to update this Agent ? ',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      }).then((result) => {
      if (result.isConfirmed) {
    
    this.router.navigateByUrl('/admin/agencies', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
      }});
};

onCancel() {
  this.dialogRef.close();
}
}
