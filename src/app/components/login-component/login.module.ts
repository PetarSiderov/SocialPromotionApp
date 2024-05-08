import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountRoutes } from "../accounts.routing";
import { LoginComponentComponent } from "./login-component.component";

export const LoginRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponentComponent
    },
  ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(LoginRoutes),
    ]
  })
export class LoginModule { }
  