import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8000/send-email';

  constructor(private http: HttpClient) { }
  
 sendEmail(recipient: string, subject: string, message: string) {
        const body = { recipient, subject, message };
        return this.http.post(this.apiUrl, body);
    }
}
