import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AgenceComponent } from './admin/agence/agence.component';
import { ClientComponent } from './admin/client/client.component';
import { AuthGuard } from './auth.guard';
import { RegisCliComponent } from './regis-cli/regis-cli.component';
import { AgencyComponent } from './agency/agency.component';
import { ClientsComponent } from './clients/clients.component';
import { RegisAgComponent } from './regis-ag/regis-ag.component';
import { RegisAdComponent } from './regis-ad/regis-ad.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AgencyAuthGuard } from './agency-auth.guard';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'register/client', component: RegisCliComponent },
  { path: 'register/agent', component: RegisAgComponent },
  { path: 'register/admin', component: RegisAdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'admin', component: AdminComponent ,canActivate:[AdminAuthGuard]},
  { path: 'client', component: ClientsComponent, canActivate:[AuthGuard]},
  { path: 'agency', component: AgencyComponent ,canActivate:[AgencyAuthGuard]},


  { path: 'admin', 
  children: [
    {
      path: 'clients',
      component: ClientComponent
    },
    {
      path: 'agencies',
      component: AgenceComponent
    }
  ]
 },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
