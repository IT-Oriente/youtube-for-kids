import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../../services/youtube/search.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnDestroy, OnInit {

  searchText: string;
  private searchSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
  ) {
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.searchText = this.route.snapshot.queryParamMap.get('q');
    this.searchSubscription = this.searchService.query$.subscribe(
      value => this.router.navigate(['results'], { queryParams: { q: value } })
    );
  }

  onSearchTextChanged = (value: string) => this.searchService.next(value);

}
