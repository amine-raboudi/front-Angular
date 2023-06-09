import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdduserComponent } from 'src/app/admin/client/adduser/adduser.component';
import { ClientService } from '../client.service';

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
    
  }
}
