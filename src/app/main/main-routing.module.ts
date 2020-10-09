import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'luyen-thi',
        loadChildren: () => import('./study-for-test/study-for-test.module').then(m => m.StudyForTestModule)
      },
      {
        path: 'trang-ca-nhan',
        loadChildren: () => import('./profile-infomation/profile-infomation.module').then(m => m.ProfileInfomationModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
