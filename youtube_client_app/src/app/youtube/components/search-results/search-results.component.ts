import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { YoutubeItemsSelector } from 'src/app/redux/selectors/youtube.selectors';
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
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.sub = this.store
      .select(YoutubeItemsSelector)
      .subscribe((searchResult) => {
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

  // eslint-disable-next-line class-methods-use-this
  public trackById(item: VideoResponseItem): string {
    return item.id;
  }
}
