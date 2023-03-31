import { Injectable } from '@angular/core';
import { SearchItemInterface } from '../../shared/models/search-item.model';
import data from '../../../mockData/data.json';
import SearchResponseInterface from '../../shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public mockData: SearchResponseInterface = data;
  public searchData: SearchItemInterface[] = [];

  public getCurrentSearchResult(): SearchItemInterface[] {
    return this.mockData.items;
  }
}
