import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { AdminsComponent } from './admin/admins/admins.component';
import { ShowAdminsComponent } from './admin/admins/show-admins/show-admins.component';
import { EditAdminsComponent } from './admin/admins/edit-admins/edit-admins.component';
import { NewAdminComponent } from './admin/new-admin/new-admin.component';
import { AddComponent } from './admin/new-admin/add/add.component';
import { OfferComponent } from './admin/offer/offer.component';
import { AddofferComponent } from './admin/offer/addoffer/addoffer.component';
import { ShowofferComponent } from './admin/offer/showoffer/showoffer.component';
import { EditofferComponent } from './admin/offer/editoffer/editoffer.component';
import { RegisCliComponent } from './regis-cli/regis-cli.component';
import { AgencyComponent } from './agency/agency.component';
import { ClientsComponent } from './clients/clients.component';
import { RegisAgComponent } from './regis-ag/regis-ag.component';
import { RegisAdComponent } from './regis-ad/regis-ad.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { AddReservationComponent } from './admin/reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './admin/reservation/edit-reservation/edit-reservation.component';
import { ClientsAgComponent } from './agency/clients-ag/clients-ag.component';
import { ResAgComponent } from './agency/res-ag/res-ag.component';
import { OffAgComponent } from './agency/off-ag/off-ag.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ImageComponent } from './admin/agence/image/image.component';


const routes: Routes = [
  { path: 'admin/dashboard', component: AdminComponent }

];

@NgModule({

  imports: [
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatBadgeModule,
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbDropdownModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgxIntlTelInputModule,
    RouterModule.forRoot(routes),
    ],
  providers: [],
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
     AdminsComponent,
     ShowAdminsComponent,
     EditAdminsComponent,
     NewAdminComponent,
     AddComponent,
     OfferComponent,
     AddofferComponent,
     ShowofferComponent,
     EditofferComponent,
     RegisCliComponent,
     AgencyComponent,
     ClientsComponent,
     RegisAgComponent,
     RegisAdComponent,
     ReservationComponent,
     AddReservationComponent,
     EditReservationComponent,
     ClientsAgComponent,
     ResAgComponent,
     OffAgComponent,
     ImageComponent,
     

    
    
  ],
  exports: [RouterModule],

  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
