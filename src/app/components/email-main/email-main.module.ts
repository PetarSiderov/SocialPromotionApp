import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmailMainComponent } from './email-main.component';

export const EmailMainRoutes: Routes = [
  {
    path: 'emails-main',
    component: EmailMainComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(EmailMainRoutes),
  ]
})
export class EmailMainModule { }
