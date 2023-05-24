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
  token: any;
  constructor(private http: HttpClient,private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  login(email: string, password: string) {
    return this.http.post<{ token: any }>(`${this.apiUrl}/login`, { email, password })
      
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }


  

}
