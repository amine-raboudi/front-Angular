import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientService } from '../admin/client/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regis-cli',
  templateUrl: './regis-cli.component.html',
  styleUrls: ['./regis-cli.component.scss']
})
export class RegisCliComponent {
 
  userForm!: FormGroup;

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required ]],
      country: ['', [Validators.required ]],
      phoneNumber: ['', [Validators.required ]]
    });
   
  }
  registerUser(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.http.post('http://localhost:8000/register/client', this.userForm.value)
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
