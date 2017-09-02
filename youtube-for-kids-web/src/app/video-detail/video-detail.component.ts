import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Video } from '../shared/models/video/video';
import { YoutubeService } from '../shared/services/youtube.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  formattedDescription: string[];
  videoId?: string;
  video: Video;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .map(params => (this.videoId = params.get('videoId')))
      .do(videoId => console.log(videoId, this.videoId))
      .switchMap(videoId => this.youtubeService.get(videoId))
      .subscribe(video => this.setVideo(video));
  }

  onStateChange(event: any) {
    console.log(event);
  }

  savePlayer(event: any) {
    console.log(event);
  }

  private setVideo(video: Video) {
    this.video = video;
    this.formattedDescription = this.video.snippet.description.split('\n');
  }

}
