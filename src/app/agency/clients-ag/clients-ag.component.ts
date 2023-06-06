import { Component, Input, OnInit } from '@angular/core';

import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/admin/client/client.service';
import { AdduserComponent } from 'src/app/admin/client/adduser/adduser.component';
import { ShowClientComponent } from 'src/app/admin/client/show-client/show-client.component';
import { EditClientComponent } from 'src/app/admin/client/edit-client/edit-client.component';
import { AgencyService } from '../agency.service';
import { ReservationService } from 'src/app/admin/reservation/reservation.service';

export interface User {
  id: string;
  email: string;
  password:string;
  roles:[];
  is_verified:boolean;
}


@Component({
  selector: 'app-clientAg',
  templateUrl: './clients-ag.component.html',
  styleUrls: ['./clients-ag.component.scss']
})
export class ClientsAgComponent implements OnInit {

  @Input() 

  message: any;
  users: any;
  data: any;
  dataR:any;
  dataAg:any
  id: any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  clientID:any;
  displayedColumns: string[] = ['id', 'email', 'password','roles','is_verified','edit'];
  dataSource = new MatTableDataSource<User>();

  searchQuery: string = '';

  constructor(private clientService: ClientService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,private router: Router,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private agService: AgencyService ,
    private reservationService:ReservationService) {
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
    height : '500px',
    panelClass : 'my-dialog-class'
  });

  dialogRef.afterClosed().subscribe()

}

openShowUserDialog(id:any ):void {
  
  const clientID  =this.clientService.getUserById(id).subscribe((data: any) => {
    this.users = this.data;
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
      height : '500px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()
  });

 
} 

  ngOnInit() {

    
    this.agService.getAg(this.message).subscribe(data=>{
      this.dataAg=data;
      this.http.get<User[]>('http://127.0.0.1:8000/reservation/agenceCli/'+ this.dataAg[0].id).subscribe(data => {
      
      this.dataSource.data = data;
      
    });
    })
    
   
   
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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










}
