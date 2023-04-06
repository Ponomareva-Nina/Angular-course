import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  API_KEY,
  BASE_URL,
  MAX_RESULTS_INITIAL,
} from 'src/constants/api-constants';
import { Observable, map, switchMap } from 'rxjs';
import { SearchResponseInterface } from 'src/app/shared/models/search-response.model';
import {
  VideoResponseInterface,
  VideoResponseItem,
} from 'src/app/shared/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor(private http: HttpClient) {}

  public getSearchResult(keyword: string): Observable<VideoResponseItem[]> {
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
  ): Observable<VideoResponseItem[]> {
    const ids = items.join(',');
    return this.http
      .get<VideoResponseInterface>(
        `${BASE_URL}/videos?key=${API_KEY}&type=video&id=${ids}&part=snippet,statistics`
      )
      .pipe(map((response) => response.items));
  }

  public getItem(id: string): Observable<VideoResponseItem> {
    return this.http
      .get<VideoResponseInterface>(
        `${BASE_URL}/videos?key=${API_KEY}&type=video&id=${id}&part=snippet,statistics`
      )
      .pipe(
        map((response) => {
          const [item] = response.items;
          return item;
        })
      );
  }
}
