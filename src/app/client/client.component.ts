import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  users: any;
  Edit = false;
  data: any;
  Search=false;
  id: any;
  email: any;
  password: any;
  roles: any;
  is_verified: any;
  Post=false;


  constructor(private clientService: ClientService) {
   }

  ngOnInit() {
    this.clientService.getUsers().subscribe((data: any) => {
      this.users = data;

    });
  }

  deleteUser(id: number) {
    this.clientService.deleteUser(id).subscribe(
      response => console.log('User deleted successfully.'),
      error => console.error('Error deleting user:', error)
      
    );
    
  }
  updateUser(userId:any,userData:any) {
    this.clientService.updateUser(userId, userData).subscribe(
      response => console.log('User updated successfully.'),
      error => console.error('Error updating user:', error)
    );

  }
  
  showEdit() {
    this.Edit = true;
}
AddClient() {
  this.Post = true;
}
showSearch(){
  this.Search = true;
}

SearchID() {
  this.clientService.getUserById(this.id).subscribe(data => {
    this.data = data;
    console.log(data);
  });
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
}
}
