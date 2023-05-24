import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservation() {
    return this.http.get('http://127.0.0.1:8000/reservation/' );
  }

  getReservationById(id: number) {
    return this.http.get('http://127.0.0.1:8000/reservation/'+ id);
  }

  addReservation(user: any) {
    return this.http.post('http://127.0.0.1:8000/reservation/new'  , user);
  }

  updateReservation(id: number, user: any) {
    return this.http.put('http://127.0.0.1:8000/reservation/update/'+id, user);
    

  }

  deleteReservation(id: number) {
    return this.http.delete('http://127.0.0.1:8000/reservation/delete/' + id);
  }
}
