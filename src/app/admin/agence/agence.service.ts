import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://127.0.0.1:8000/agenceAll' );
  }

  getUserById(id: number) {
    return this.http.get('http://127.0.0.1:8000/agence/'+ id);
  }

  addUser(user: any) {
    return this.http.post('http://127.0.0.1:8000/agence/post'  , user);
  }

  updateUser(id: number, user: any) {
    
    return this.http.put('http://127.0.0.1:8000/agence/update/'+id, user);
    

  }

  deleteUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/agence/delete/' + id);
  }
}
