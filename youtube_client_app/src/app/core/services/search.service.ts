import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SortOptions } from 'src/constants/sort-options';
import { SearchItemInterface } from '../../shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public constructor(protected apiService: ApiService) {}
  private currentSearchResults: SearchItemInterface[] = [];
  private currentSortOption: SortOptions = SortOptions.VIEWS_DESC;
  private currentByKeywordFilter = '';

  public updateSearchResult(): void {
    this.currentSearchResults = this.apiService.getCurrentSearchResult();
  }

  public get CurrentSearchItems(): SearchItemInterface[] {
    return this.currentSearchResults;
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
