import SearchResponseInterface from 'src/app/models/search-response.model';
import { Component } from '@angular/core';
import data from '../../../../mockData/data.json';
import { SearchItemInterface } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export default class SearchListComponent {
  public mockData: SearchResponseInterface = data;
  public searchResults: SearchItemInterface[] = this.mockData.items;
}
