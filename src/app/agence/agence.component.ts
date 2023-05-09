import { Component } from '@angular/core';
import { AgenceService } from './agence.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import Swal from 'sweetalert2';
import { EditAgenceComponent } from './edit-agence/edit-agence.component';
import { ShowAgenceComponent } from './show-agence/show-agence.component';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent {
  data: any;
  id: any;
  users: any;

    constructor(private agenceService: AgenceService,private dialog: MatDialog,private router: Router ) {
  }
  openAddUserDialog():void {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-background',
    };
    const dialogRef = this.dialog.open(AddAgenceComponent,{
     
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });

}


SearchID() {
  this.agenceService.getUserById(this.id).subscribe(data => {
    this.data = data;
    console.log(data);
  });
}

openShowUserDialog(id:any ):void {
  
  const clientID  =this.agenceService.getUserById(id).subscribe((data: any) => {
    this.users = this.data;
    console.log(data)
    const dialogRef = this.dialog.open(ShowAgenceComponent,{
      data:data,
      width : '800px',
      height : '400px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()

  });
 
} 

openEditUserDialog(data:any,id:any):void {
 
  
  const clientID  =this.agenceService.getUserById(id).subscribe((data: any) => {
    this.data = data;
    const dialogRef = this.dialog.open(EditAgenceComponent,{
      data:data[0],
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });
    console.log(data[0]);
    dialogRef.afterClosed().subscribe()
  });

 
} 
deleteUser(id: number) {
  Swal.fire({
    icon: 'question',
    title: 'Deleting',
    text: 'Are you sure to delete this client ?',
    confirmButtonText: 'Delete',
    cancelButtonText:'Cancel',
    showCancelButton: true,

  }).then((result) => {
    if (result.isConfirmed) {this.agenceService.deleteUser(id).subscribe(
      response => console.log('User deleted successfully.'),
      error => console.error('Error deleting user:', error));
  
  this.router.navigateByUrl('/admin/agencies', { skipLocationChange: true }).then(() => {
    const currentUrl = this.router.url;
    window.history.replaceState({}, '', currentUrl);
    window.location.reload();
  });
}});
  }

ngOnInit() {
  this.agenceService.getUsers().subscribe((data: any) => {
    this.users = data;

  });
}
  
}