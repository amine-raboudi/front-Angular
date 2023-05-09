import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AgenceComponent } from './agence/agence.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },

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
