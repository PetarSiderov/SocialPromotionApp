import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TelegramPhoneNumbersModule } from './components/telegram-phone-numbers/telegram-phone-numbers.module';
import { TelegramPhoneNumbersComponent } from './components/telegram-phone-numbers/telegram-phone-numbers.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: '',
        loadChildren:
        () => import('./components/accounts/accounts.module').then(m => m.AccountsModule)
      },
      {
        path: '',
        loadChildren:
        () => import('./components/telegram-phone-numbers/telegram-phone-numbers.module').then(m => m.TelegramPhoneNumbersModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponentComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'telegram-phone-numbers',
    component: TelegramPhoneNumbersComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];
