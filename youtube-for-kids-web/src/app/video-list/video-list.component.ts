import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/services/youtube.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    this.youtubeService.search().subscribe(data => console.log);
  }

}
