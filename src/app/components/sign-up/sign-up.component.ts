import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  isClicked: boolean = false;
  /**
   *
   */
  constructor(private router: Router, private authService: AuthenticationService) {
    
  }

  signup() {
    this.isClicked = true;
    if(this.email == '' || this.firstName == '' ||  this.lastName == '' ||  this.email == '' || this.password == ''){
      return;
    }
    var user = new User()
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.password = this.password;
    user.username = this.username;
    user.email = this.email;
    this.authService.signUp(user)
  }

  backToLogin(){
    this.router.navigate(['/login'])
  }
}
