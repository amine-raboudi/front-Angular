import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-regis-ag',
  templateUrl: './regis-ag.component.html',
  styleUrls: ['./regis-ag.component.scss']
})
export class RegisAgComponent {
  userForm!: FormGroup;

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required ]],
      country: ['', [Validators.required ]],
      phoneNumber: ['', [Validators.required ]],
      logo: ['', [Validators.required ]],


    });
   
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target?.result as string;
      // Save the imageDataUrl in your database
      console.log('Image Data URL:', imageDataUrl);
      this.userForm.value.logo=imageDataUrl;

    };
    reader.readAsDataURL(file);
   
    
    // You can store the filePath in a variable or pass it to a function for further processing
  }
  registerUser(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.http.post('http://localhost:8000/register/agent', this.userForm.value)
      .subscribe(
        (response) => {
          this.openSnackBar1('Successfully Registration','OK');

          console.log('Successfully registration', response);
          // Display success message or redirect to a success page
        },
        (error) => {
          this.openSnackBar2('Registration Denied','OK');
          console.error('Error occurred during registration:', error);
          // Display error message or handle specific error cases
        }
      );
  }
  openSnackBar1(message: string, action: any) {
      
    this.snackBar.open(message, action, {
      panelClass: 'snackbar1'
    });
  }
  openSnackBar2(message: string, action: any) {
      
    this.snackBar.open(message, action, {
      panelClass: 'snackbar2'
    });
  }
}
