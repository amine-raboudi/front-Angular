import { Component, Inject } from '@angular/core';
import { ClientService } from '../client/client.service';
import {  MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdduserComponent } from '../adduser/adduser.component';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent {

  users: any;
  id: any;

  constructor(    private dialogRef: MatDialogRef<AdduserComponent>, private clientService: ClientService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: { clientID: any }) {
  }
  ngOnInit() {
    
  }
  onCancel() {
    this.dialogRef.close(this.data);
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
  }
}
