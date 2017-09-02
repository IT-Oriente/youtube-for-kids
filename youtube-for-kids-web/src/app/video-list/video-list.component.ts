import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/services/youtube.service';
import { Observable } from 'rxjs/Rx';
import { Video } from '../shared/models/video/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    this.videos = this.youtubeService
      .search()
      .map(r => r.items);
  }

}
