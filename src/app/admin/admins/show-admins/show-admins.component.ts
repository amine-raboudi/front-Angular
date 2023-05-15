import { Component, Inject } from '@angular/core';
import { AddAgenceComponent } from '../../agence/add-agence/add-agence.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminsService } from '../admins.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-admins',
  templateUrl: './show-admins.component.html',
  styleUrls: ['./show-admins.component.scss']
})
export class ShowAdminsComponent {
 
  users: any;
  id: any;

  constructor(    private dialogRef: MatDialogRef<AddAgenceComponent>, private AdminService: AdminsService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: { clientID: any }) {
  }
  ngOnInit() {
    
  }
  onCancel() {
    this.dialogRef.close(this.data);
    
  }

}
