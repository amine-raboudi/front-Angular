import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../client.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{

  email: any;
  password: any;
  is_verified: any;
  adress:any;
  phoneNumber:any;
  country:any;
  fullName:any;

  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AdduserComponent>,
    private clientService: ClientService,
    private router: Router, 
    
  ) {
   
  }
  openSnackBar(message: string, action: any) {
      
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }
  ngOnInit() {
    
  
}

  

  onCancel() {
    this.dialogRef.close();
  }
  PostUser() {
    const data = { 
      email: this.email,
      password:this.password,
      roles:["ROLE_CLIENT"],
      is_verified:false,
      adress:this.adress,
      phoneNumber:this.phoneNumber,
      country:this.country,
      fullName:this.fullName

     };
     console.log(data);
    Swal.fire({
      icon: 'question',
      title: 'Adding',
      text: 'Are you sure to add this client ?',
      cancelButtonText:'Cancel',
      showCancelButton: true,  
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.addUser(data).subscribe(response => {
          console.log(response);
        });
        this.dialogRef.close(data);
        this.openSnackBar('client Added','OK');
      }});
}
  
}