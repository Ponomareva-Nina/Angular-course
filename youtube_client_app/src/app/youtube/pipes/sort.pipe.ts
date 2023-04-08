/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemInterface } from 'src/app/shared/models/search-item.model';
import { SortOptions } from 'src/constants/sort-options';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(
    items: SearchItemInterface[],
    currentSort: SortOptions
  ): SearchItemInterface[] {
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
  }

  private sortByDate(items: SearchItemInterface[]): SearchItemInterface[] {
    return items.sort(
      (prev, next) =>
        new Date(next.snippet.publishedAt).getTime() -
        new Date(prev.snippet.publishedAt).getTime()
    );
  }

  private sortByViews(items: SearchItemInterface[]): SearchItemInterface[] {
    return items.sort(
      (prev, next) =>
        Number(next.statistics.viewCount) - Number(prev.statistics.viewCount)
    );
  }
}
