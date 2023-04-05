import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';
import { SortOptions } from 'src/constants/sort-options';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResults = new BehaviorSubject<VideoResponseItem[]>([]);

  public constructor(protected apiService: ApiService) {}
  private currentSortOption: SortOptions = SortOptions.VIEWS_DESC;
  private currentByKeywordFilter = '';

  public get searchResults$(): Observable<VideoResponseItem[]> {
    return this.searchResults.asObservable();
  }

  public fetchResults(keyword: string): Observable<VideoResponseItem[]> {
    return this.apiService.getSearchResult(keyword);
  }

  public fetchItem(id: string): Observable<VideoResponseItem> {
    return this.apiService.getItem(id);
  }

  public setSearchResults(items: VideoResponseItem[]): void {
    this.searchResults.next(items);
  }

  public get currentFilter(): string {
    return this.currentByKeywordFilter;
  }

  public set currentFilter(value: string) {
    this.currentByKeywordFilter = value;
  }

  public get currentSort(): SortOptions {
    return this.currentSortOption;
  }

  public set currentSort(value: SortOptions) {
    this.currentSortOption = value;
  }
}
