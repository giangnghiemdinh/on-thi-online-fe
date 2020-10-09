import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInfomationRoutingModule } from './profile-infomation-routing.module';
import { ProfileImformationPageComponent } from './containers/profile-imformation-page/profile-imformation-page.component';


@NgModule({
  declarations: [ProfileImformationPageComponent],
  imports: [
    CommonModule,
    ProfileInfomationRoutingModule
  ]
})
export class ProfileInfomationModule { }
