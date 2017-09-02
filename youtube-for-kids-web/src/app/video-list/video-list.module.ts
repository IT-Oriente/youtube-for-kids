import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule, MdListModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './video-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent,
  }
];

@NgModule({
  declarations: [
    VideoListComponent,
  ],
  imports: [
    CommonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class VideoListModule { }
