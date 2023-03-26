/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import { SortOptions } from '../constants/constants';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(
    items: SearchItemInterface[],
    currentSort: SortOptions
  ): SearchItemInterface[] {
    if (currentSort === SortOptions.DATE_ASC) {
      return items.sort(
        (prev, next) =>
          new Date(next.snippet.publishedAt).getTime() -
          new Date(prev.snippet.publishedAt).getTime()
      );
    }
    if (currentSort === SortOptions.DATE_DESC) {
      return items.sort(
        (prev, next) =>
          new Date(prev.snippet.publishedAt).getTime() -
          new Date(next.snippet.publishedAt).getTime()
      );
    }
    if (currentSort === SortOptions.VIEWS_ASC) {
      return items.sort(
        (prev, next) =>
          Number(next.statistics.viewCount) - Number(prev.statistics.viewCount)
      );
    }
    if (currentSort === SortOptions.VIEWS_DESC) {
      return items.sort(
        (prev, next) =>
          Number(prev.statistics.viewCount) - Number(next.statistics.viewCount)
      );
    }
    return items;
  }
}
