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
  public getTitle(searchItem: SearchItemInterface): string {
    return searchItem.snippet.title;
  }

  public getSmallThumbnailUrl(searchItem: SearchItemInterface): string {
    const imgUrl = searchItem.snippet.thumbnails.standard.url;
    return `url(${imgUrl})`;
  }

  public getPublishedAt(searchItem: SearchItemInterface): string {
    return searchItem.snippet.publishedAt;
  }

  public getSocialsInfo(searchItem: SearchItemInterface): StatisticsInterface {
    return searchItem.statistics;
  }
}