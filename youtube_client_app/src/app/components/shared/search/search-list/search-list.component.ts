import SearchResponseInterface from 'src/app/models/search-response.model';
import data from '../../../../../mockData/data.json';
import { SearchItemInterface } from '../../../../models/search-item.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export default class SearchListComponent {
  public mockData: SearchResponseInterface;
  public searchResults: SearchItemInterface[];

  public constructor() {
    this.mockData = data;
    this.searchResults = this.mockData.items;
  }
}
