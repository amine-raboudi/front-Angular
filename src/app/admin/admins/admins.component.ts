import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../agence/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminsService } from './admins.service';
import Swal from 'sweetalert2';
import { ShowAdminsComponent } from './show-admins/show-admins.component';
import { EditAdminsComponent } from './edit-admins/edit-admins.component';

export interface User {
  id: string;
  email: string;
  password:string;
  roles:[];
  status:string;
}


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})

export class AdminsComponent {
  data: any;
  id: any;
  users: any;
  recipient: any;
  subject: any;
  message:  any;

  displayedColumns: string[] = ['id', 'email', 'password','roles','status','action','edit'];
  dataSource = new MatTableDataSource<User>();
  constructor(private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private emailService: EmailService,
    private adminService: AdminsService,
    private _snackBar: MatSnackBar,

    private dialog: MatDialog,private router: Router )  {
    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );
  }
  openShowUserDialog(id:any ):void {
  
    const clientID  =this.adminService.getUserById(id).subscribe((data: any) => {
      this.users = this.data;
      const dialogRef = this.dialog.open(ShowAdminsComponent,{
        data:data,
        width : '800px',
        height : '500px',
        panelClass : 'my-dialog-class'
      });
      dialogRef.afterClosed().subscribe()
  
    });
   
  } 
  openEditUserDialog(data:any,id:any):void {
 
  
    const clientID  =this.adminService.getUserById(id).subscribe((data: any) => {
      this.data = data;
      const dialogRef = this.dialog.open(EditAdminsComponent,{
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
      text: 'Are you sure to delete this admin ?',
      confirmButtonText: 'Delete',
      cancelButtonText:'Cancel',
      showCancelButton: true,
  
    }).then((result) => {
      if (result.isConfirmed) {this.adminService.deleteUser(id).subscribe(
        response => console.log('User deleted successfully.'),
        error => console.error('Error deleting user:', error));
    
        this.openSnackBar('Admin deleted','OK');
     
  }});
    }
    openSnackBar(message: string, action: any) {
      
      this._snackBar.open(message, action, {
        duration: 2000,
        panelClass: 'blue-snackbar'
      });
    }

  ngOnInit() {
    this.http.get<User[]>('http://127.0.0.1:8000/adminAll').subscribe(data => {
      this.dataSource.data = data;
    });
  }



  Accept(email:any,data:any,id:any) {
 
    this.emailService.sendEmail(email, 'Admin', 'Click <a href="http://127.0.0.1:8000/login">HERE</a>')
    .subscribe(() => {
        console.log('ok'); // success response from Symfony 5 API
    });
    data.status="Accepted"  ;
    this.adminService.updateUser(id, data).subscribe();
  
    
  }
  
  Deny(data:any,id:any) {
   
    
    data.status="Denied"  ;
    this.adminService.updateUser(id, data).subscribe(
      () => {
        console.log('ok');
      }
    );
  
    
  }
}
