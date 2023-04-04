import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  API_KEY,
  BASE_URL,
  MAX_RESULTS_INITIAL,
} from 'src/constants/api-constants';
import { Observable, map, switchMap } from 'rxjs';
import { SearchItemInterface } from '../../shared/models/search-item.model';
import SearchResponseInterface from '../../shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor(private http: HttpClient) {}

  public getSearchResult(keyword: string): Observable<SearchItemInterface[]> {
    return this.http
      .get<SearchResponseInterface>(
        `${BASE_URL}/search?key=${API_KEY}&type=video&part=snippet&maxResults=${MAX_RESULTS_INITIAL}&q=${keyword}`
      )
      .pipe(
        map<SearchResponseInterface, Array<string>>((search) =>
          search.items.map((item) => item.id.videoId)
        ),
        switchMap((items: string[]) => this.getItemsWithStatistics(items))
      );
  }

  private getItemsWithStatistics(
    items: string[]
  ): Observable<SearchItemInterface[]> {
    const ids = items.join(',');
    return this.http
      .get<SearchResponseInterface>(
        `${BASE_URL}/videos?key=${API_KEY}&type=video&id=${ids}&part=snippet,statistics`
      )
      .pipe(map((response) => response.items));
  }

  public getItem(id: string): Observable<SearchItemInterface> {
    return this.http
      .get<SearchResponseInterface>(
        `${BASE_URL}/videos?key=${API_KEY}&type=video&id=${id}&part=snippet,statistics`
      )
      .pipe(map((response) => response.items[0]));
  }
}
