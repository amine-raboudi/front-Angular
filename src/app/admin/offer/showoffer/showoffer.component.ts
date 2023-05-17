import { Component, Inject } from '@angular/core';
import { AdduserComponent } from '../../client/adduser/adduser.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddofferComponent } from '../addoffer/addoffer.component';
import { Offer } from '../offer.component';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showoffer',
  templateUrl: './showoffer.component.html',
  styleUrls: ['./showoffer.component.scss']
})
export class ShowofferComponent {
  constructor(    private dialogRef: MatDialogRef<AddofferComponent>, private clientService: OfferService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: { clientID: any }) {
  }
  ngOnInit() {
    
  }
  onCancel() {
    this.dialogRef.close(this.data);
    
  }

}
