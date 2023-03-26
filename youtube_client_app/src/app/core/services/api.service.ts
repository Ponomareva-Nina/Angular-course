import { Injectable } from '@angular/core';
import { SearchItemInterface } from '../../models/search-item.model';
import SearchResponseInterface from '../../models/search-response.model';
import data from '../../../mockData/data.json';

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
