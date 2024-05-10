import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TelegramPhoneNumbersComponent } from "./telegram-phone-numbers.component";

export const TelegramPhoneNumbersRoutes: Routes = [
    {
      path: 'telegram-phone-numbers',
      component: TelegramPhoneNumbersComponent
    },
  ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(TelegramPhoneNumbersRoutes),
    ]
  })
export class TelegramPhoneNumbersModule { }