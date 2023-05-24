import { Component } from '@angular/core';
import { LoginService } from './login-service';
import jwt_decode from 'jwt-decode';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private authService: LoginService,private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        const token = response?.token;
        console.log(token);
        const decodedToken:DecodedToken = jwt_decode(token);
        console.log(decodedToken);
        
        localStorage.setItem('token', token);
        const data = { email: decodedToken.email };
      const navigationExtras: NavigationExtras = {
            state: { data }
        };
  
        if(decodedToken.roles[0]=='ROLE_AGENT'  &&   this.authService.isAuthenticated()){
          this.router.navigate(['/agency'],navigationExtras);
        }else {
          if(decodedToken.roles[0]=='ROLE_CLIENT' &&   this.authService.isAuthenticated()){
          this.router.navigate(['/client'],navigationExtras);
        }else{
          if(decodedToken.roles[0]=='ROLE_ADMIN' &&  this.authService.isAuthenticated()){
          this.router.navigate(['/admin'],navigationExtras);
          }
        }
      }
        

      },
      error => console.error(error));
      

  }
 

  

}
