import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ShowClientComponent } from './show-client/show-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  id: string;
  email: string;
  password:string;
  roles:[];
  is_verified:boolean;
  fullName:string;
  country:string;
  adress:string;
  phoneNumber:string;

}


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  users: any;
  data: any;
  id: any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  fullName:any;
  country:any;
  adress:any;
  phoneNumber:any;
  clientID:any;

  displayedColumns: string[] = ['id', 'fullName','email', 'adress','phoneNumber','country','is_verified','edit'];
  dataSource = new MatTableDataSource<User>();

  


  constructor(private clientService: ClientService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,private router: Router,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry, ) {
    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );

  }
//dialog
openAddUserDialog():void {
  const dialogConfig: MatDialogConfig = {
    panelClass: 'dialog-background',
  };
  const dialogRef = this.dialog.open(AdduserComponent,{
   
    width : '800px',
    height : '550px',
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
      height : '500px',
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
      height : '600px',
      panelClass : 'my-dialog-class'
    });
    console.log(data[0]);
    dialogRef.afterClosed().subscribe()
  });

 
} 

  ngOnInit() {
    this.http.get<User[]>('http://127.0.0.1:8000/clientAll').subscribe(data => {
      this.dataSource.data = data;
      console.log( this.dataSource.data)
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
    this.openSnackBar('client deleted','OK');
   
  }});
    }
  

    openSnackBar(message: string, action: any) {
      
      this._snackBar.open(message, action, {
        duration: 2000,
        panelClass: 'blue-snackbar'
      });
    }


SearchID() {
  this.clientService.getUserById(this.id).subscribe(data => {
    this.data = data;
    console.log(data);
  });
}







}
