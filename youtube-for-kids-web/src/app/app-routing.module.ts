import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './core/layout/dashboard/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'results',
        loadChildren: './video-list/video-list.module#VideoListModule',
      },
      {
        path: 'detail/:videoId',
        loadChildren: './video-detail/video-detail.module#VideoDetailModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
