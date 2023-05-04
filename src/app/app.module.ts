import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudAgService } from './crud-ag.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { AdduserComponent } from './adduser/adduser.component';
import { ShowClientComponent } from './show-client/show-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

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
    MatDialogModule
    ],
  providers: [CrudAgService],
  bootstrap: [AppComponent],
  declarations: [
    ClientComponent,
    HomeComponent,
    SidebarComponent,

    AdduserComponent,
     ShowClientComponent,
     EditClientComponent,
    
    
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
