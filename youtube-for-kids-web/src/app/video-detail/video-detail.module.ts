import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { YoutubePlayerModule } from 'ng2-youtube-player';

import { VideoDetailComponent } from './video-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VideoDetailComponent,
  }
];

@NgModule({
  declarations: [
    VideoDetailComponent,
  ],
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild(routes),
    SharedModule,
    YoutubePlayerModule,
  ],
})
export class VideoDetailModule { }
