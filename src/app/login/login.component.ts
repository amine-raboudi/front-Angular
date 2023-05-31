import { Component } from '@angular/core';
import { LoginService } from './login-service';
import jwt_decode from 'jwt-decode';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AdminAuthGuard } from '../admin-auth.guard';
import { DataStorageService } from '../data-storage.service';

interface DecodedToken {
  email: any;
  roles: any;
  exp:number;
  iat:number;
  password:any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any;
  password: any;
  data:any;
  tst:any;
  role:any
  userForm!: FormGroup;
 

  constructor(private dataStorageService: DataStorageService,private authService: LoginService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) {}
  ngOnInit() {
    this.userForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      

    });
    
    
  }

  login(): void {
    
    this.authService.login(this.userForm.value.email, this.userForm.value.password).subscribe(

      response => {

        const role = response?.role[0];
       
  
        if(role=='ROLE_AGENT'  ){
          const token = response?.token;
          const decodedToken:DecodedToken = jwt_decode(token);
          
          localStorage.setItem('token1', token);
          const data = { email: decodedToken.email };
          this.dataStorageService.setAg(data);
          
          this.router.navigate(['/agency']);
        }else {
          if(role=='ROLE_CLIENT' ){
            const token = response?.token;
            const decodedToken:DecodedToken = jwt_decode(token);
            
            localStorage.setItem('token2', token);
            const data = { email: decodedToken.email };
            
            this.dataStorageService.setCli(data);

          this.router.navigate(['/client']);
        }else{
          if(role=='ROLE_ADMIN' ){
            const token = response?.token;
            const decodedToken:DecodedToken = jwt_decode(token);
            
            localStorage.setItem('token3', token);
            const data = { email: decodedToken.email,token:token };
           this.dataStorageService.setAd(data);
           
            
            
            

         

          this.router.navigate(['/admin']);
          }
        }
      }
        

      },
      error =>{
        Swal.fire({
          title: 'Failure',
          text: 'Invalid credentials',
          icon: 'error',
          showCancelButton: false,
          cancelButtonText: 'OK',
        })
        
        
      });
      

  }
}

  


