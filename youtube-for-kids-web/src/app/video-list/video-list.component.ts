import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/services/youtube.service';
import { Observable } from 'rxjs/Rx';
import { Video } from '../shared/models/video/video';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../core/services/youtube/search.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    this.videos = this.route.queryParamMap
      .switchMap(params => this.getListFromApi(params.get('q')));
  }

  private getListFromApi = (q?: string) => this.youtubeService
    .search(q)
    .map(r => r.items)

}
