import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  /**
   *
   */
  constructor(private authenticateService: AuthenticationService) {
    
  }

  logout(){
    this.authenticateService.logout();
  }
}
