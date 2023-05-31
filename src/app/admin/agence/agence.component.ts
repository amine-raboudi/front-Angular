import { Component } from '@angular/core';
import { AgenceService } from './agence.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmailService } from './email.service';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import { ShowAgenceComponent } from './show-agence/show-agence.component';
import { EditAgenceComponent } from './edit-agence/edit-agence.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageComponent } from './image/image.component';


export interface User {
  id: string;
  email: string;
  password:string;
  roles:[];
  status:string;
  name:string;
  country:string;
  adress:string;
  phoneNumber:string;
  logo:File;
}

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})




export class AgenceComponent {
  data: any;
  id: any;
  logo:any;
  users: any;
  recipient: any;
  subject: any;
  message:  any;

  displayedColumns: string[] = ['id','logo', 'name','email','phoneNumber', 'country','city','adress','status','action'];
  dataSource = new MatTableDataSource<User>();

  
  
    constructor(private http: HttpClient,
      private matIconRegistry: MatIconRegistry,
       private domSanitizer: DomSanitizer,
       private emailService: EmailService,
       private agenceService: AgenceService,
       private _snackBar: MatSnackBar,

       private dialog: MatDialog,private router: Router ) 
       {

      this.matIconRegistry.addSvgIcon(
        'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
        );

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
    const dialogRef = this.dialog.open(AddAgenceComponent,{
     
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });

}


SearchID() {
  this.agenceService.getUserById(this.id).subscribe(data => {
    this.data = data;
  });
}

openShowUserDialog(id:any ):void {
  
  const clientID  =this.agenceService.getUserById(id).subscribe((data: any) => {
    this.users = this.data;
    const dialogRef = this.dialog.open(ShowAgenceComponent,{
      data:data,
      width : '800px',
      height : '500px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()

  });
 
} 

openEditUserDialog(data:any,id:any):void {
 
  
  const clientID  =this.agenceService.getUserById(id).subscribe((data: any) => {
    this.data = data;
    console.log(data);
    
    const dialogRef = this.dialog.open(EditAgenceComponent,{
      data:data[0],
      width : '800px',
      height : '700px',
      panelClass : 'my-dialog-class'
    });
    dialogRef.afterClosed().subscribe()
  });

 
} 
deleteUser(id: number) {
  Swal.fire({
    icon: 'question',
    title: 'Deleting',
    text: 'Are you sure to delete this agence ?',
    confirmButtonText: 'Delete',
    cancelButtonText:'Cancel',
    showCancelButton: true,

  }).then((result) => {
    if (result.isConfirmed) {this.agenceService.deleteUser(id).subscribe(
      response => console.log('User deleted successfully.'),
      error => console.error('Error deleting user:', error));
  
      this.openSnackBar('agence deleted','OK');
   
}});
  }

  ngOnInit() {
    this.http.get<User[]>('http://127.0.0.1:8000/agenceAll').subscribe(data => {
      this.dataSource.data = data;
      console.log(data);
      
    });
  }
  
Accept(email:any,data:any,id:any) {
 
  this.emailService.sendAg(email, 'Activate Account', 'Hi, after looking at your informations, we decide to accept your account . to login please click <a href="http://127.0.0.1:4200/login">HERE</a>')
  .subscribe((response) => {
      console.log(response); 
  });
  data.status="Accepted"  ;
  console.log(data);
  
  this.agenceService.updateUser(id, data).subscribe();

  
}

Deny(email:any,data:any,id:any) {
  this.emailService.DenyAg(email, 'Desctivate Account', 'Hi, Unfortunately we decide to desactivate your account')
  .subscribe((response) => {
    console.log(response); 
});
  data.status="Denied"  ;
  this.agenceService.updateUser(id, data).subscribe();

  
}


openImage(id:any): void {
  this.agenceService.getUserById(id).subscribe((data)=>{
    this.data=data;
    console.log(this.data);
    
  })
  const dialogRef = this.dialog.open(ImageComponent, {
    data: {
      imageUrl: this.data[0].logo
    }
  });
}
  
}