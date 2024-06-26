
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { TelegramPhoneNumbersComponent } from './components/telegram-phone-numbers/telegram-phone-numbers.component';
import { TelegramNewAccountsComponent } from './components/telegram-new-accounts/telegram-new-accounts.component';
import { TruthSocialMainComponent } from './components/truth-social-main/truth-social-main.component';
import { EmailMainComponent } from './components/email-main/email-main.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AccountsComponent,
    LoginComponentComponent,
    SignUpComponent,
    TelegramPhoneNumbersComponent,
    TelegramNewAccountsComponent,
    TruthSocialMainComponent,
    EmailMainComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    AppSidebarComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
