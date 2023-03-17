import { Component } from '@angular/core';
import SearchResponseInterface from 'src/app/models/search-response.model';
import data from '../../mockData/data.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export default class SearchListComponent {
  public mockData: SearchResponseInterface = data;
}
