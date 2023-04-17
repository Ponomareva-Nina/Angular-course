import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';
import { HttpErrorMessages } from 'src/constants/api-constants';
import { SortOptions } from 'src/constants/sort-options';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public constructor(protected apiService: ApiService) {}
  private currentSortOption: SortOptions = SortOptions.VIEWS_DESC;
  private currentByKeywordFilter = '';

  public fetchResults(
    keyword: string
  ): Observable<VideoResponseItem[] | string> {
    return this.apiService.getSearchResult(keyword).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = this.getHttpErrorMessage(err);
        return of(message);
      })
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private getHttpErrorMessage(err: HttpErrorResponse): string {
    const status = err.status.toString();
    const message =
      HttpErrorMessages[status as keyof typeof HttpErrorMessages] ||
      err.message;
    return message;
  }

  public fetchItem(id: string): Observable<VideoResponseItem | string> {
    return this.apiService.getItem(id).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = this.getHttpErrorMessage(err);
        return of(message);
      })
    );
  }

  public get currentFilter(): string {
    return this.currentByKeywordFilter;
  }

  public set currentFilter(value: string) {
    this.currentByKeywordFilter = value;
  }

  public get currentSort(): SortOptions {
    return this.currentSortOption;
  }

  public set currentSort(value: SortOptions) {
    this.currentSortOption = value;
  }
}
