/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemInterface } from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(
    items: SearchItemInterface[] | null,
    keyword: string
  ): SearchItemInterface[] | null {
    if (keyword.trim() && items) {
      return items.filter((item) =>
        item.snippet.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    return items;
  }
}
