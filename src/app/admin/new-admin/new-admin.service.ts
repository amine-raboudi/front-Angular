import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAdminService {

  constructor(private http: HttpClient) { }
  addUser(user: any) {
    return this.http.post('http://127.0.0.1:8000/newAdmin/post'  , user);
  }
  updateUser(id: number, user: any) {
    return this.http.put('http://127.0.0.1:8000/newAdmin/update/'+id, user);
    

  }
}
