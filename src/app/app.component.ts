import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userStats: any;
  isLogged: boolean = false;

  constructor(private authservice: AuthenticationService, private router: Router) {
    this.userStats = authservice.getUserStatus();
    if (Object.keys(this.userStats).length) {
      // authorised so return true
      this.isLogged = true;
    }
  }

  ngOnInit(): void {
    this.authservice.isLoggedUser?.subscribe(s => {
      if (Object.keys(s).length) {
        this.isLogged = true;
        this.router.navigate(["/dashboard"])
      }
      else{
        this.isLogged = false;
        this.router.navigate(['/login'])
      }
    })
  }
}
