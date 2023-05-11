import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddAgenceComponent } from '../add-agence/add-agence.component';
import { AgenceService } from '../agence.service';

@Component({
  selector: 'app-show-agence',
  templateUrl: './show-agence.component.html',
  styleUrls: ['./show-agence.component.scss']
})
export class ShowAgenceComponent {

  users: any;
  id: any;

  constructor(    private dialogRef: MatDialogRef<AddAgenceComponent>, private clientService: AgenceService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: { clientID: any }) {
  }
  ngOnInit() {
    
  }
  onCancel() {
    this.dialogRef.close(this.data);
    
  }
  
}
