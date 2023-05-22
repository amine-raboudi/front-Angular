import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientService } from '../admin/client/client.service';

@Component({
  selector: 'app-regis-cli',
  templateUrl: './regis-cli.component.html',
  styleUrls: ['./regis-cli.component.scss']
})
export class RegisCliComponent {
  email: any;
  password: any;

  constructor(private http: HttpClient) { }

  registerUser(): void {
    const client = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8000/register/client', client)
      .subscribe(
        (response) => {
          console.log('User registered successfully!', response);
          // Display success message or redirect to a success page
        },
        (error) => {
          console.error('Error occurred during registration:', error);
          // Display error message or handle specific error cases
        }
      );
  }


}
