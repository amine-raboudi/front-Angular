import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client/client.service';
import Swal from 'sweetalert2';
import { AgenceService } from '../agence.service';

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.scss']
})
export class AddAgenceComponent {
  email: any;
  password: any;
  is_verified: any;
  status: any;

  constructor(
    private dialogRef: MatDialogRef<AddAgenceComponent>,
    private agenceService: AgenceService,
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
      roles:["ROLE_AGENT"],
      status:this.status
     };
     console.log(data);
    this.agenceService.addUser(data).subscribe(response => {
      console.log(response);
    });
    this.dialogRef.close(data);
    
    Swal.fire({
      icon: 'success',
      title: 'Done!',
      text: 'Agence Added Successfully!',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
    
    this.router.navigateByUrl('/admin/agencies', { skipLocationChange: true }).then(() => {
      const currentUrl = this.router.url;
      window.history.replaceState({}, '', currentUrl);
      window.location.reload();
    });
      }});
}
  
}
