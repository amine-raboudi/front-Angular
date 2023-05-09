import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudAgService } from './crud-ag.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { ShowClientComponent } from './client/show-client/show-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { LoginComponent } from './login/login.component';
import { AgenceComponent } from './agence/agence.component';
import { AdduserComponent } from './client/adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { AddAgenceComponent } from './agence/add-agence/add-agence.component';
import { EditAgenceComponent } from './agence/edit-agence/edit-agence.component';
import { ShowAgenceComponent } from './agence/show-agence/show-agence.component';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbDropdownModule
    ],
  providers: [CrudAgService],
  bootstrap: [AppComponent],
  declarations: [
    ClientComponent,
    HomeComponent,

    AdduserComponent,
     ShowClientComponent,
     EditClientComponent,
     LoginComponent,
     AgenceComponent,
     AdminComponent,
     AddAgenceComponent,
     EditAgenceComponent,
     ShowAgenceComponent,
    
    
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
