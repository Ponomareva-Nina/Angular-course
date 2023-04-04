import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { SearchItemInterface } from 'src/app/shared/models/search-item.model';
import { SortOptions } from 'src/constants/sort-options';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResults = new BehaviorSubject<SearchItemInterface[]>([]);

  public constructor(protected apiService: ApiService) {}
  private currentSortOption: SortOptions = SortOptions.VIEWS_DESC;
  private currentByKeywordFilter = '';

  public get searchResults$(): Observable<SearchItemInterface[]> {
    return this.searchResults.asObservable();
  }

  public fetchResults(keyword: string): Observable<SearchItemInterface[]> {
    return this.apiService.getSearchResult(keyword);
  }

  public fetchItem(id: string): Observable<SearchItemInterface> {
    return this.apiService.getItem(id);
  }

  public setSearchResults(items: SearchItemInterface[]): void {
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
