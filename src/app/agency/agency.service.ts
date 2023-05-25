import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) {

   }
   getAg(email:any) {
    return this.http.get('http://127.0.0.1:8000/agenceEmail/'+email );
  }
  

}
