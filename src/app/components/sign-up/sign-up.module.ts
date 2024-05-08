import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up.component";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

export const SignUpRoutes: Routes = [
    {
      path: 'login',
      component: SignUpComponent
    },
  ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(SignUpRoutes),
    ]
  })
export class SignUpModule { }