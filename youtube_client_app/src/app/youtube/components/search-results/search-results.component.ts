import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { SearchService } from 'src/app/core/services/search.service';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  public constructor(
    protected searchService: SearchService,
    protected apiService: ApiService
  ) {}

  public get searchItems$(): Observable<VideoResponseItem[]> {
    return this.searchService.searchResults$;
  }
}
