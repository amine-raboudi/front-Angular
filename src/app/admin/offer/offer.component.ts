import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { AgenceService } from '../agence/agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfferService } from './offer.service';
import { AddofferComponent } from './addoffer/addoffer.component';
import { ShowofferComponent } from './showoffer/showoffer.component';
import Swal from 'sweetalert2';
import { EditofferComponent } from './editoffer/editoffer.component';


export interface Offer {
  id: string;
  Price: any;
  DateStart:any;
  DateEnd:any;
  Category:any;
}


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  clickAll=true;
  clickH=false;
  clickV=false;
  clickO=false;
  clickVo=false;
  clickR=false;


  i=0;
  j=0;
  k=0;
  l=0;
  m=0;
  n=0;
  data: any;
  id:any;
  users: any;

  

  constructor(private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer,
     private _snackBar: MatSnackBar,
     private  OfferService:OfferService,

     private dialog: MatDialog,private router: Router ) 
     {

    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );

}


  displayedColumns: string[] = ['id', 'Price', 'DateStart','DateEnd','Category','Active','action','edit'];
  dataSource = new MatTableDataSource<Offer>();
  dataSource1 = new MatTableDataSource<Offer>();
  dataSource2 = new MatTableDataSource<Offer>();
  dataSource3 = new MatTableDataSource<Offer>();
  dataSource4 = new MatTableDataSource<Offer>();
  dataSource5 = new MatTableDataSource<Offer>();


  ngOnInit() {
    this.http.get<Offer[]>('http://127.0.0.1:8000/offer').subscribe(data => {
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
    console.log(data);
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
      height : '500px',
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
      height : '500px',
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
