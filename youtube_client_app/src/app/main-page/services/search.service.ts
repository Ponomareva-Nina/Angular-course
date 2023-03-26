import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SortOptions } from 'src/constants/sort-options';
import { SearchItemInterface } from '../../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public constructor(protected apiService: ApiService) {}
  public currentSearchResults: SearchItemInterface[] = [];
  public currentSort: SortOptions = SortOptions.VIEWS_DESC;
  public currentByKeywordFilter = '';

  public updateSearchResult(): void {
    this.currentSearchResults = this.apiService.getCurrentSearchResult();
  }

  public getCurrentSearchItems(): SearchItemInterface[] {
    return this.currentSearchResults;
  }
  public updateKeywordFilter(value: string): void {
    this.currentByKeywordFilter = value;
  }
}
