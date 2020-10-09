import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudyForTestPageComponent} from './containers/study-for-test-page/study-for-test-page.component';

const routes: Routes = [
  {path: '', component: StudyForTestPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyForTestRoutingModule { }
