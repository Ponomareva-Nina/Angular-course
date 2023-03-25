import { Component } from '@angular/core';
import { AppSearchService } from '../services/app-search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export default class SearchListComponent {
  public constructor(protected appSearchService: AppSearchService) {}
}
