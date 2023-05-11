import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudAgService } from './crud-ag.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './admin/client/adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { AddAgenceComponent } from './admin/agence/add-agence/add-agence.component';
import { EditAgenceComponent } from './admin/agence/edit-agence/edit-agence.component';
import { ShowAgenceComponent } from './admin/agence/show-agence/show-agence.component';
import { AgenceComponent } from './admin/agence/agence.component';
import { ClientComponent } from './admin/client/client.component';
import { ShowClientComponent } from './admin/client/show-client/show-client.component';
import { EditClientComponent } from './admin/client/edit-client/edit-client.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';


const routes: Routes = [
  { path: 'admin/dashboard', component: AdminComponent }

];

@NgModule({

  imports: [
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbDropdownModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
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
     DashboardComponent,
    
    
  ],
  exports: [RouterModule],

  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
