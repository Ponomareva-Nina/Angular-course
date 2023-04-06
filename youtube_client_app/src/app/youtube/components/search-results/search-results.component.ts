import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Nullable } from 'src/app/shared/models/types';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnDestroy, OnInit {
  private sub: Nullable<Subscription> = null;
  public errorMessage: Nullable<string> = null;
  private items: Nullable<VideoResponseItem[]> = null;

  public constructor(
    protected searchService: SearchService,
    protected apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.sub = this.searchService.searchResults$.subscribe((searchResult) => {
      if (typeof searchResult === 'string') {
        this.errorMessage = searchResult;
        this.items = null;
      } else {
        this.errorMessage = null;
        this.items = searchResult;
      }
    });
  }
  public get searchItems(): Nullable<VideoResponseItem[]> {
    return this.items;
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
