import { ResolveFn, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AccountRoutes: Routes = [
  {
    path: 'account',
    component: AccountsComponent
  }
]