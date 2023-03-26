import { Component, Input } from '@angular/core';
import {
  SearchItemInterface,
  StatisticsInterface,
} from '../../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() public searchItem!: SearchItemInterface;

  public get title(): string {
    return this.searchItem.snippet.title;
  }

  public get smallThumbnailUrl(): string {
    const imgUrl = this.searchItem.snippet.thumbnails.standard.url;
    return `url(${imgUrl})`;
  }

  public getSocialsInfo(): StatisticsInterface {
    return this.searchItem.statistics;
  }
}
