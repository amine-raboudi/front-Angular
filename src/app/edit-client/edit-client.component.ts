import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent {
  users: any;
  Search=false;
  id: any;
  idf:any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  clientID:any;
  constructor(    private dialogRef: MatDialogRef<EditClientComponent>, private clientService: ClientService,private dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: { clientID: any }) {
  }

  ngOnInit() {
    
  }

  updateUser() {
    
    this.clientService.updateUser(this.id, this.data).subscribe(result => {
      console.log(result);
    }
     
    );
   
};
}
