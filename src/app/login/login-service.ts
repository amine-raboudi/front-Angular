import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Token } from '@angular/compiler';

interface DecodedToken {
  email: any;
  roles: any;
  exp:number;
  iat:number;
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'http://localhost:8000'; // Replace with your Symfony backend URL
  private jwtHelper: JwtHelperService;
  constructor(private http: HttpClient,private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  login(email: string, password: string) {
    return this.http.post<{ token: any,role:any}>(`${this.apiUrl}/login`, { email, password })
      
  }

  logoutAd(): void {
    localStorage.removeItem('token3');
    this.router.navigate(['/login']);
  }
  logoutAg(): void {
    localStorage.removeItem('token1');
    this.router.navigate(['/login']);
  }
  logoutCl(): void {
    localStorage.removeItem('token2');
    this.router.navigate(['/login']);
  }

  isAuthenticatedAdmin(): boolean {
    const token = localStorage.getItem('token3');
    return !this.jwtHelper.isTokenExpired(token);
  }
  isAuthenticatedAgency(): boolean {
    const token = localStorage.getItem('token1');
    return !this.jwtHelper.isTokenExpired(token);
  }
  isAuthenticatedclient(): boolean {

    const token = localStorage.getItem('token2');
    return !this.jwtHelper.isTokenExpired(token);
  }


  

}
