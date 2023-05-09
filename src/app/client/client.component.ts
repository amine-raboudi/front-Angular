import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ShowClientComponent } from '../show-client/show-client.component';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { AdduserComponent } from '../adduser/adduser.component';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  users: any;
  data: any;
  Search=false;
  id: any;
  idf:any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  clientID:any;

  constructor(private clientService: ClientService,private dialog: MatDialog,private router: Router ) {
   }
//dialog
openAddUserDialog():void {
  const dialogConfig: MatDialogConfig = {
    panelClass: 'dialog-background',
  };
  const dialogRef = this.dialog.open(AdduserComponent,{
   
    width : '800px',
    height : '500px',
    panelClass : 'my-dialog-class'
  });

  dialogRef.afterClosed().subscribe()

}

openShowUserDialog(id:any ):void {
  
  const clientID  =this.clientService.getUserById(id).subscribe((data: any) => {
    this.users = this.data;
    console.log(data)
    const dialogRef = this.dialog.open(ShowClientComponent,{
      data:data,
      width : '800px',
      height : '400px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()

  });
 
} 
openEditUserDialog(data:any,id:any):void {
 
  
  const clientID  =this.clientService.getUserById(id).subscribe((data: any) => {
    this.data = data;
    const dialogRef = this.dialog.open(EditClientComponent,{
      data:data[0],
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });
    console.log(data[0]);
    dialogRef.afterClosed().subscribe()
  });

 
} 

  ngOnInit() {
    this.clientService.getUsers().subscribe((data: any) => {
      this.users = data;

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
      if (result.isConfirmed) {this.clientService.deleteUser(id).subscribe(
        response => console.log('User deleted successfully.'),
        error => console.error('Error deleting user:', error));
    
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
  }});
    }
  


showSearch(){
  this.Search = true;
}

SearchID() {
  this.clientService.getUserById(this.id).subscribe(data => {
    this.data = data;
    console.log(data);
  });
}







}
