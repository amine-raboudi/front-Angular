import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getOffer() {
    return this.http.get('http://127.0.0.1:8000/offer/' );
  }

  getOfferById(id: number) {
    return this.http.get('http://127.0.0.1:8000/offer/'+ id);
  }

  addOffer(user: any) {
    return this.http.post('http://127.0.0.1:8000/offer/new'  , user);
  }

  updateOffer(id: number, user: any) {
    return this.http.put('http://127.0.0.1:8000/offer/update/'+id, user);
    

  }

  deleteOffer(id: number) {
    return this.http.delete('http://127.0.0.1:8000/offer/delete/' + id);
  }
}
