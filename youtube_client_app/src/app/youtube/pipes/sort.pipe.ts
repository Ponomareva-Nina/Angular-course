/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { Nullable } from 'src/app/shared/models/types';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';
import { SortOptions } from 'src/constants/sort-options';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(
    items: Nullable<VideoResponseItem[]>,
    currentSort: SortOptions
  ): Nullable<VideoResponseItem[]> {
    if (items) {
      switch (currentSort) {
        case SortOptions.DATE_ASC:
          return this.sortByDate(items);
        case SortOptions.DATE_DESC:
          return this.sortByDate(items).reverse();
        case SortOptions.VIEWS_ASC:
          return this.sortByViews(items);
        case SortOptions.VIEWS_DESC:
          return this.sortByViews(items).reverse();
        default:
          return items;
      }
    } else {
      return null;
    }
  }

  private sortByDate(items: VideoResponseItem[]): VideoResponseItem[] {
    return items.sort(
      (prev, next) =>
        new Date(next.snippet.publishedAt).getTime() -
        new Date(prev.snippet.publishedAt).getTime()
    );
  }

  private sortByViews(items: VideoResponseItem[]): VideoResponseItem[] {
    return items.sort(
      (prev, next) =>
        Number(next.statistics.viewCount) - Number(prev.statistics.viewCount)
    );
  }
}
