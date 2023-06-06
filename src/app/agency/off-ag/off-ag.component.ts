import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OfferService } from  'src/app/admin/offer/offer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddofferComponent } from 'src/app/admin/offer/addoffer/addoffer.component';
import { ShowofferComponent } from 'src/app/admin/offer/showoffer/showoffer.component';
import { EditofferComponent } from 'src/app/admin/offer/editoffer/editoffer.component';
import Swal from 'sweetalert2';
import { AgencyService } from '../agency.service';


export interface Offer {
  id: string;
  Price: any;
  DateStart:any;
  DateEnd:any;
  Category:any;
}

@Component({
  selector: 'app-off-ag',
  templateUrl: './off-ag.component.html',
  styleUrls: ['./off-ag.component.scss']
})
export class OffAgComponent {
  clickAll=true;
  clickH=false;
  clickV=false;
  clickO=false;
  clickVo=false;
  clickR=false;
  @Input() message: any;

  dataAg:any;
  i=0;
  j=0;
  k=0;
  l=0;
  m=0;
  n=0;
  data: any;
  id:any;
  users: any;

  searchQuery: string = '';


  constructor(private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer,
     private _snackBar: MatSnackBar,
     private  OfferService:OfferService,
     private agService: AgencyService ,


     private dialog: MatDialog,private router: Router ) 
     {

    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );

}


  displayedColumns: string[] = ['id', 'Price', 'DateStart','DateEnd','Category','Agent','Active','action','edit'];
  dataSource = new MatTableDataSource<Offer>();
  dataSource1 = new MatTableDataSource<Offer>();
  dataSource2 = new MatTableDataSource<Offer>();
  dataSource3 = new MatTableDataSource<Offer>();
  dataSource4 = new MatTableDataSource<Offer>();
  dataSource5 = new MatTableDataSource<Offer>();


  ngOnInit() {

    this.agService.getAg(this.message).subscribe(data=>{
      this.dataAg=data;
      this.http.get<Offer[]>('http://127.0.0.1:8000/offer/offAg/'+ this.dataAg[0].id).subscribe(data => {
      
      this.dataSource.data = data;
      for(let i = 0; i < data.length; i++){
        if(data[i].Category=='hotel'){
          this.dataSource1.data[this.j] = data[i];
          this.j++;
        }
        if(data[i].Category=='voyage'){
          this.dataSource2.data[this.k] = data[i];
          this.k++;

        }
        if(data[i].Category=='omra'){
          this.dataSource3.data[this.l] = data[i];
          this.l++;

        }
        if(data[i].Category=='voiture'){
          this.dataSource4.data[this.m] = data[i];
          this.m++;

        }
        if(data[i].Category=='restaurant'){
          this.dataSource5.data[this.n] = data[i];
          this.n++;

        }
      } 
    });
  
  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}  
  Click(x:number){
    if(x==1){   
       this.clickAll=true;
       this.clickH=false;
       this.clickV=false;
       this.clickO=false;
       this.clickVo=false;
       this.clickR=false;

      }
      if(x==2){   
      this.clickAll=false;
       this.clickH=true;
       this.clickV=false;
       this.clickO=false;
       this.clickVo=false;
       this.clickR=false;
      }
      if(x==3){   
        this.clickAll=false;
       this.clickH=false;
       this.clickV=true;
       this.clickO=false;
       this.clickVo=false;
       this.clickR=false;
      }
      if(x==4){   
      this.clickAll=false;
     this.clickH=false;
     this.clickV=false;
     this.clickO=true;
     this.clickVo=false;
     this.clickR=false;
      }
    if(x==5){   
      this.clickAll=false;
     this.clickH=false;
     this.clickV=false;
     this.clickO=false;
     this.clickVo=true;
     this.clickR=false;
    }
    if(x==6){   
    this.clickAll=false;
     this.clickH=false;
     this.clickV=false;
     this.clickO=false;
     this.clickVo=false;
     this.clickR=true;
    }
  }

  Active(data:any,id:any) {
 
    
    data.Active=true  ;
    this.OfferService.updateOffer(id, data).subscribe();
  
    
  }
  Stop(data:any,id:any) {
 
    
    data.Active=false  ;
    this.OfferService.updateOffer(id, data).subscribe();
  
    
  }

  openSnackBar(message: string, action: any) {
      
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }

  openAddUserDialog():void {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-background',
    };
    const dialogRef = this.dialog.open(AddofferComponent,{
     
      width : '800px',
      height : '600px',
      panelClass : 'my-dialog-class'
    });

}


SearchID() {
  this.OfferService.getOfferById(this.id).subscribe(data => {
    this.data = data;
  });
}

openShowUserDialog(id:any ):void {
  
  const clientID  =this.OfferService.getOfferById(id).subscribe((data: any) => {
    this.users = this.data;
    const dialogRef = this.dialog.open(ShowofferComponent,{
      data:data,
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()

  });
 
} 

openEditUserDialog(id:any):void {
 
  
  const clientID  =this.OfferService.getOfferById(id).subscribe((data: any) => {
    this.data = data;
    const dialogRef = this.dialog.open(EditofferComponent,{
      data:data[0],
      width : '800px',
      height : '600px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()
  });

 
} 
deleteOffer(id: number) {
  Swal.fire({
    icon: 'question',
    title: 'Deleting',
    text: 'Are you sure to delete this Offer ?',
    confirmButtonText: 'Delete',
    cancelButtonText:'Cancel',
    showCancelButton: true,

  }).then((result) => {
    if (result.isConfirmed) {this.OfferService.deleteOffer(id).subscribe(
      response => console.log('Offer deleted successfully.'),
      error => console.error('Error deleting user:', error));
  
      this.openSnackBar('Offer deleted','OK');
   
}});
  }
}
