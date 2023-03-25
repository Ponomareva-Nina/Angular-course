import { Injectable } from '@angular/core';
import { SearchItemInterface } from '../../../models/search-item.model';
import SearchResponseInterface from '../../../models/search-response.model';
import data from '../../../../mockData/data.json';

@Injectable({
  providedIn: 'root',
})
export class AppSearchService {
  public mockData: SearchResponseInterface = data;
  public searchListIsVisible = false;

  public setSearchListVisible() {
    this.searchListIsVisible = true;
  }

  public getData(): SearchItemInterface[] {
    return this.mockData.items;
  }
}
