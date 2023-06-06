import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from './reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

export interface Reservation {
  id: string;
  Client: string;
  Offer:string;
  Agent :string; 

}
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  data: any;
  users:any;

  displayedColumns: string[] = ['id', 'Client', 'Offer','Agent','edit'];
  dataSource = new MatTableDataSource<Reservation>();
  searchQuery: string = '';



  constructor(private ReservationService: ReservationService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,private router: Router,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry, ) {
    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );

  }
  openAddUserDialog():void {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-background',
    };
    const dialogRef = this.dialog.open(AddReservationComponent,{
     
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });
  
    dialogRef.afterClosed().subscribe()
  
  }
  
  openShowUserDialog(id:any ):void {
    
    const clientID  =this.ReservationService.getReservationById(id).subscribe((data: any) => {
      this.users = this.data;
      console.log(data)
      const dialogRef = this.dialog.open(ShowReservationComponent,{
        data:data,
        width : '800px',
        height : '500px',
        panelClass : 'my-dialog-class'
      });
      dialogRef.afterClosed().subscribe()
  
    });
   
  } 
  openEditUserDialog(data:any,id:any):void {
   
    
    const clientID  =this.ReservationService.getReservationById(id).subscribe((data: any) => {
      this.data = data;
      const dialogRef = this.dialog.open(EditReservationComponent,{
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
      this.http.get<Reservation[]>('http://127.0.0.1:8000/reservation/').subscribe(data => {
        this.dataSource.data = data;
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
        if (result.isConfirmed) {this.ReservationService.deleteReservation(id).subscribe(
          response => console.log('Reservation deleted successfully.'),
          error => console.error('Error deleting Reservation:', error));
      this.openSnackBar('Reservation deleted','OK');
     
    }});
      }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }  
      openSnackBar(message: string, action: any) {
        
        this._snackBar.open(message, action, {
          duration: 2000,
          panelClass: 'blue-snackbar'
        });
      }
  
  
 
  

}
