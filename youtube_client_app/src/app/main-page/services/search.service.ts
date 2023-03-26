import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SearchItemInterface } from '../../models/search-item.model';
import { SortOptions } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public constructor(protected apiService: ApiService) {}
  public currentSearchResults: SearchItemInterface[] = [];
  public currentSort: SortOptions = SortOptions.VIEWS_DESC;

  public updateSearchResult(): void {
    this.currentSearchResults = this.apiService.getCurrentSearchResult();
  }

  public getCurrentSearchItems(): SearchItemInterface[] {
    return this.currentSearchResults;
  }
}
