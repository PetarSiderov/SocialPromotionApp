import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  username: string = '';
  password: string = '';
  isClicked: boolean = false;

  constructor(private router: Router
   ){
    
  }

  ngOnInit(): void {
   
  }

  login() {
    this.isClicked = true;
    if(this.username === '' || this.password === ''){
      return 
    }
   // this.loginService.login(this.username,this.password)
    // Add your login logic here, such as sending a request to your backend for authentication.
  }

  SignUp(){

    this.router.navigate(['/sign-up']);
  }
}
