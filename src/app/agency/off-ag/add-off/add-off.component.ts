import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { OfferService } from 'src/app/admin/offer/offer.service';
import { DataStorageService } from 'src/app/data-storage.service';
import { Reservation } from '../../res-ag/res-ag.component';
import { AgencyService } from '../../agency.service';

@Component({
  selector: 'app-add-off',
  templateUrl: './add-off.component.html',
  styleUrls: ['./add-off.component.scss']
})
export class AddOffComponent {
  selectedValue:number=0;
  dataAg:any
  data:any
  message:any
  persistedData:any
  hide = true;
  userForm!: FormGroup;
  img:boolean=false
  form!: FormGroup;  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private ofService: OfferService ,
    private dataStorageService: DataStorageService,
    private agService: AgencyService ,


    ) {}
ngOnInit(){
  this.persistedData = this.dataStorageService.getAg();

    this.agService.getAg(this.persistedData.email).subscribe(data=>{
      this.dataAg=data;
      

      this.http.get<Reservation[]>('http://127.0.0.1:8000/reservation/resAg/'+ this.dataAg[0].id).subscribe(data => {
      
      this.data = data;

      
    });
    })

  this.userForm = this.formBuilder.group({
    Price: ['', Validators.required],
    Title: ['', [Validators.required]],
    category: ['', [Validators.required]],
    description: ['', Validators.required],
    dateStart: ['', [Validators.required ]],
    dateEnd: ['', [Validators.required ]],
    logo1: ['', [Validators.required ]],
    logo2: ['', [Validators.required ]],
    lofo3: ['', [Validators.required ]],
  })
}
registerUser(data:any): void {
  
  this.userForm.value.roles=data.roles,
  this.userForm.value.status= data.status,
   
   
   this.http.put('http://localhost:8000/agence/update/'+this.dataAg[0].id, this.userForm.value)
     .subscribe(
       (response) => {

         this.openSnackBar1('Successfully Registration','OK');

         console.log('Successfully registration', response);
         // Display success message or redirect to a success page
       },
       (error) => {
         this.openSnackBar2('Registration Denied','OK');
         console.error('Error occurred during registration:', error);
         // Display error message or handle specific error cases
       }
     );
 }
 openSnackBar1(message: string, action: any) {
     
   this.snackBar.open(message, action, {
     panelClass: 'snackbar1'
   });
 }
 openSnackBar2(message: string, action: any) {
     
   this.snackBar.open(message, action, {
     panelClass: 'snackbar2'
   });
 }

onFileSelected(event: any,i:any) {
   
      
  const file: File = event.target.files[0];
  

  const reader = new FileReader();
  reader.onload = (event) => {
    const imageDataUrl = event.target?.result as string;
    // Save the imageDataUrl in your database
    this.userForm.value.logo=imageDataUrl;
  };
  reader.readAsDataURL(file);
  event.stopPropagation();

}
}
