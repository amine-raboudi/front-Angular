import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../agence/email.service';
import { AgenceService } from '../agence/agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewAdminService } from './new-admin.service';
import { AddComponent } from './add/add.component';

export interface User {
  id: string;
  email: string;
  MailSended:boolean;
}
@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent {
  data: any;
  id: any;
  users: any;
  recipient: any;
  subject: any;
  message:  any;

  displayedColumns: string[] = ['id', 'email', 'MailSended','action'];
  dataSource = new MatTableDataSource<User>();
  constructor(private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer,
     private emailService: EmailService,
     private NAService: NewAdminService,
     private _snackBar: MatSnackBar,
     private dialog: MatDialog,
     private router: Router ) 
     {

    this.matIconRegistry.addSvgIcon(
      'my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/my-icon.svg')
      );

}
ngOnInit() {
  this.http.get<User[]>('http://127.0.0.1:8000/newAdmin').subscribe(data => {
    this.dataSource.data = data;
  });
}

openAddUserDialog():void {
  const dialogConfig: MatDialogConfig = {
    panelClass: 'dialog-background',
  };
  const dialogRef = this.dialog.open(AddComponent,{
   
    width : '800px',
    height : '500px',
    panelClass : 'my-dialog-class'
  });

}

send(email:any,data:any,id:any) {
 
  this.emailService.sendEmail(email, 'Admin', 'Click <a href="http://127.0.0.1:8000/register/admin">HERE</a>')
  .subscribe();
  data.MailSended=true  ;
  this.NAService.updateUser(id, data).subscribe();

  
}

}
