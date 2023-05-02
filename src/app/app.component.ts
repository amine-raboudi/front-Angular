import { Component } from '@angular/core';
import { CrudAgService } from './crud-ag.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularProject';
  data: any;
  newData: any;
  existingData: any;
 
  
  constructor(private service: CrudAgService) {
 
  
  }
  
  // Read
getData() {
  this.service.getAllData().subscribe((data:any) => {
    this.data = data;
    

    
  });
}

// Create
createNewData() {
  this.service.createData(this.newData).subscribe((data: any) => {
    this.data.post(data);
   
  });
}

// Update
updateExistingData() {
  this.service.updateData(this.existingData).subscribe((data: any) => {
    // handle success
  }, (error: any) => {
    // handle error
  });
}
 

// Delete
deleteData(id: any) {
  this.service.deleteData(id).subscribe((data: any) => {
    // handle success
  }, (error: any) => {
    // handle error
  });
}
ngOnInit(){
this.getData();


}

}




