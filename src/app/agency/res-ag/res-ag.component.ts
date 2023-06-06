
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { EditReservationComponent } from 'src/app/admin/reservation/edit-reservation/edit-reservation.component';
import { ShowReservationComponent } from 'src/app/admin/reservation/show-reservation/show-reservation.component';
import { AddReservationComponent } from 'src/app/admin/reservation/add-reservation/add-reservation.component';
import { ReservationService } from 'src/app/admin/reservation/reservation.service';
import { Component, Input } from '@angular/core';
import { AgencyService } from '../agency.service';

export interface Reservation {
  id: string;
  Client: string;
  Offer:string;
  Agent :string; 

}


@Component({
  selector: 'app-res-ag',
  templateUrl: './res-ag.component.html',
  styleUrls: ['./res-ag.component.scss']
})
export class ResAgComponent {
  @Input() message: any;

  dataAg:any;
  data: any;
  users:any;
  searchQuery: string = '';

  displayedColumns: string[] = ['id', 'Client', 'Offer','Agent','edit'];
  dataSource = new MatTableDataSource<Reservation>();

  constructor(private ReservationService: ReservationService,
    private _snackBar: MatSnackBar,
    private agService: AgencyService ,
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
      dialogRef.afterClosed().subscribe()
    });
  
   
  } 
  
    ngOnInit() {

      this.agService.getAg(this.message).subscribe(data=>{
        this.dataAg=data;
        this.http.get<Reservation[]>('http://127.0.0.1:8000/reservation/resAg/'+ this.dataAg[0].id).subscribe(data => {
        
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
        if (result.isConfirmed) {this.ReservationService.deleteReservation(id).subscribe(
        )
      this.openSnackBar('Reservation deleted','OK');
     
    }});
      }
    
  
      openSnackBar(message: string, action: any) {
        
        this._snackBar.open(message, action, {
          duration: 2000,
          panelClass: 'blue-snackbar'
        });
      }
  
  
 
  

}
