import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://127.0.0.1:8000/adminAll' );
  }

  getUserById(id: number) {
    return this.http.get('http://127.0.0.1:8000/admin/'+ id);
  }



  updateUser(id: number, user: any) {
    return this.http.put('http://127.0.0.1:8000/admin/update/'+id, user);
    

  }

  deleteUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/admin/delete/' + id);
  }
}
