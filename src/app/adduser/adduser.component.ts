import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client/client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{

  email: any;
  password: any;
  is_verified: any;

  constructor(
    private dialogRef: MatDialogRef<AdduserComponent>,
    private clientService: ClientService,
    private router: Router, 
    
  ) {
   
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
      is_verified:this.is_verified
     };
    this.clientService.addUser( data).subscribe(response => {
      console.log(response);
    });
    this.dialogRef.close(data);
    
    Swal.fire({
      icon: 'success',
      title: 'Done!',
      text: 'Client Added Successfully!',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
    
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
      }});
}
  
}