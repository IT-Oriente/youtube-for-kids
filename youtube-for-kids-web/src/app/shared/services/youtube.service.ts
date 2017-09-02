import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ApiService } from '../../core/services/api.service';
import { RequestService } from '../../core/services/request.service';
import { QueryResult } from '../models/query-result';
import { Video } from '../models/video/video';

@Injectable()
export class YoutubeService {

  constructor(
    private api: ApiService,
    private request: RequestService,
  ) {
  }

  get = (videoId: number | string): Observable<Video> => this.api.get<QueryResult<Video>>(
    'videos', {
      params: this.request.getParams({
        part: 'snippet,contentDetails,statistics',
        id: videoId,
      })
    }
  ).map(result => result.items && result.items[0])

  search = (q?: string, maxResults?: number): Observable<QueryResult<Video>> => this.api.get<QueryResult<Video>>(
    'search', {
      params: this.request.getParams({
        maxResults: maxResults || 50,
        part: 'id,snippet',
        ...(q && { q } || {}),
        type: 'video',
      }),
    }
  )

}
