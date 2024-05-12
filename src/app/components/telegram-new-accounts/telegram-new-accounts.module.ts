import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TelegramNewAccountsComponent } from "./telegram-new-accounts.component";

export const TelegramPhoneNumbersRoutes: Routes = [
    {
      path: 'telegram-new-accounts',
      component: TelegramNewAccountsComponent
    },
  ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(TelegramPhoneNumbersRoutes),
    ]
  })
export class TelegramNewPhoneNumbersModule { }