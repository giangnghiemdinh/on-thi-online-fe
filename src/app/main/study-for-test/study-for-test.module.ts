import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyForTestRoutingModule } from './study-for-test-routing.module';
import { StudyForTestPageComponent } from './containers/study-for-test-page/study-for-test-page.component';


@NgModule({
  declarations: [StudyForTestPageComponent],
  imports: [
    CommonModule,
    StudyForTestRoutingModule
  ]
})
export class StudyForTestModule { }
