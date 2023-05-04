import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'client', component: ClientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: SidebarComponent }

];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
