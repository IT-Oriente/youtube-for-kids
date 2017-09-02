import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeService } from './services/youtube.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    YoutubeService,
  ],
})
export class SharedModule { }
