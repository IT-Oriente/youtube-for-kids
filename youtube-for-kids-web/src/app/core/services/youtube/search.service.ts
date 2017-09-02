import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class SearchService {

  private query = new Subject<string>();
  query$: Observable<string>;

  constructor() {
    this.query$ = this.query
      .debounceTime(300)
      .distinctUntilChanged();
  }

  next(value?: string) {
    this.query.next(value);
  }

}
