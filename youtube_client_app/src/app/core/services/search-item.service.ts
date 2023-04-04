/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  SearchItemInterface,
  StatisticsInterface,
} from 'src/app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  public getTitle(searchItem: SearchItemInterface | null): string {
    if (searchItem) {
      return searchItem.snippet.title;
    }
    return 'no data';
  }

  public getSmallThumbnailUrl(searchItem: SearchItemInterface | null): string {
    if (searchItem) {
      const imgUrl = searchItem.snippet.thumbnails.standard.url;
      return `url(${imgUrl})`;
    }
    return 'no data';
  }

  public getFullThumbnailUrl(searchItem: SearchItemInterface | null): string {
    if (searchItem) {
      const imgUrl = searchItem.snippet.thumbnails.medium.url;
      return `url(${imgUrl})`;
    }
    return 'no data';
  }

  public getPublishedAt(searchItem: SearchItemInterface | null): string {
    if (searchItem) {
      return searchItem.snippet.publishedAt;
    }
    return 'no data';
  }

  public getSocialsInfo(
    searchItem: SearchItemInterface | null
  ): StatisticsInterface | null {
    if (searchItem) {
      return searchItem.statistics;
    }
    return null;
  }

  public getDescription(searchItem: SearchItemInterface | null): string {
    if (searchItem) {
      return searchItem.snippet.description;
    }
    return 'no data';
  }
}
