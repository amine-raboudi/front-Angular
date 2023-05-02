import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudAgService {

  constructor(private http: HttpClient) { 
    
  }
  // Read
getAllData(){
  return this.http.get('http://127.0.0.1:8000/clientAll');
}

// Create
createData(data: any) {
  return this.http.post('http://127.0.0.1:8000/agence/post', data);
}

// Update
updateData(data: any) {
  return this.http.put('http://127.0.0.1:8000/agence' + data.id, data);
}

// Delete
deleteData(id: any) {
  return this.http.delete('http://127.0.0.1:8000/agence' + id);
}


}
