import { ResolveFn, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

export const AccountRoutes: Routes = [
  {
    path: 'account',
    component: AccountsComponent
  }
]