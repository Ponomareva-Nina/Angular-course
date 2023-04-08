import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  MAX_RESULTS_INITIAL,
  SEARCH_URL,
  SearchParams,
  VIDEOS_URL,
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
    let searchParams = new HttpParams();
    searchParams = searchParams.appendAll({
      type: SearchParams.TYPE,
      part: SearchParams.WITHOUT_STATS,
      maxResults: MAX_RESULTS_INITIAL.toString(),
      q: keyword,
    });

    return this.http
      .get<SearchResponseInterface>(SEARCH_URL, {
        params: searchParams,
      })
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
    let searchParams = new HttpParams();
    searchParams = searchParams.appendAll({
      part: SearchParams.WITH_STATS,
      id: ids,
    });
    return this.http
      .get<VideoResponseInterface>(VIDEOS_URL, {
        params: searchParams,
      })
      .pipe(map((response) => response.items));
  }

  public getItem(id: string): Observable<VideoResponseItem> {
    let searchParams = new HttpParams();
    searchParams = searchParams.appendAll({
      id,
      part: SearchParams.WITH_STATS,
    });
    return this.http
      .get<VideoResponseInterface>(VIDEOS_URL, {
        params: searchParams,
      })
      .pipe(
        map((response) => {
          const [item] = response.items;
          return item;
        })
      );
  }
}
