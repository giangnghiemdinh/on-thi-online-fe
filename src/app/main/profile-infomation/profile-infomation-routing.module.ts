import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileImformationPageComponent} from './containers/profile-imformation-page/profile-imformation-page.component';

const routes: Routes = [
  {path: '', component: ProfileImformationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileInfomationRoutingModule { }
