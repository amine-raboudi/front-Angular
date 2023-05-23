import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  email:any;

  constructor(private route: ActivatedRoute,private router: Router) {
    const navigationState = this.router.getCurrentNavigation()?.extras?.state;
    if (navigationState && navigationState['data']) {
      this.email = navigationState['data'].email;
    }
  }
}
