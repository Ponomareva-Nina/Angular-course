/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { StatisticsInterface } from 'src/app/shared/models/search-item.model';
import { Nullable } from 'src/app/shared/models/types';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  public getTitle(searchItem: Nullable<VideoResponseItem>): Nullable<string> {
    if (searchItem) {
      return searchItem.snippet.title;
    }
    return null;
  }

  public getSmallThumbnailUrl(
    searchItem: Nullable<VideoResponseItem>
  ): string | null {
    if (searchItem) {
      const imgUrl =
        searchItem.snippet.thumbnails.standard?.url ||
        searchItem.snippet.thumbnails.default.url;
      return imgUrl;
    }
    return null;
  }

  public getFullThumbnailUrl(
    searchItem: Nullable<VideoResponseItem>
  ): string | null {
    if (searchItem) {
      const imgUrl =
        searchItem.snippet.thumbnails.maxres?.url ||
        searchItem.snippet.thumbnails.high?.url ||
        searchItem.snippet.thumbnails.medium?.url ||
        searchItem.snippet.thumbnails.default.url;
      return imgUrl;
    }
    return null;
  }

  public getPublishedAt(
    searchItem: Nullable<VideoResponseItem>
  ): Nullable<string> {
    if (searchItem) {
      return searchItem.snippet.publishedAt;
    }
    return null;
  }

  public getSocialsInfo(
    searchItem: Nullable<VideoResponseItem>
  ): Nullable<StatisticsInterface> {
    if (searchItem) {
      return searchItem.statistics;
    }
    return null;
  }

  public getDescription(
    searchItem: Nullable<VideoResponseItem>
  ): Nullable<string> {
    if (searchItem) {
      return searchItem.snippet.description;
    }
    return null;
  }
}
