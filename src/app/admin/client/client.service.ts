import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://127.0.0.1:8000/clientAll' );
  }

  getUserById(id: number) {
    return this.http.get('http://127.0.0.1:8000/client/'+ id);
  }

  addUser(user: any) {
    return this.http.post('http://127.0.0.1:8000/client/post'  , user);
  }

  updateUser(id: number, user: any) {
    return this.http.put('http://127.0.0.1:8000/client/update/'+id, user);
    

  }

  deleteUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/client/delete/' + id);
  }
}
