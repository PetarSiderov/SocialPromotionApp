import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TruthSocialMainComponent } from "./truth-social-main.component";

export const TruthSocialMainRouts: Routes = [
    {
      path: 'truth-social-accounts',
      component: TruthSocialMainComponent
    },
  ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(TruthSocialMainRouts),
    ]
  })
export class TruthSocialMainModule { }