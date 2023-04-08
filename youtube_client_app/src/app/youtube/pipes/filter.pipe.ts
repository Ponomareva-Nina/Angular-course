/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { Nullable } from 'src/app/shared/models/types';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(
    items: Nullable<VideoResponseItem[]>,
    keyword: string
  ): Nullable<VideoResponseItem[]> {
    if (keyword.trim() && items) {
      return items.filter((item) =>
        item.snippet.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    return items;
  }
}
