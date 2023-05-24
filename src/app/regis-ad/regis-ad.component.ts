import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regis-ad',
  templateUrl: './regis-ad.component.html',
  styleUrls: ['./regis-ad.component.scss']
})
export class RegisAdComponent {
  email: any;
  password: any;

  constructor(private http: HttpClient) { }

  registerUser(): void {
    const client = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8000/register/admin', client)
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
