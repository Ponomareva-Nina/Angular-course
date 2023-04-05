import { Component, Input } from '@angular/core';
import { SearchItemService } from 'src/app/core/services/search-item.service';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';
import { StatisticsInterface } from 'src/app/shared/models/search-item.model';
import { Nullable } from 'src/app/shared/models/types';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() public searchItem!: VideoResponseItem;

  public constructor(
    private searchItemService: SearchItemService,
    private router: Router
  ) {}

  public get title(): string | null {
    return this.searchItemService.getTitle(this.searchItem);
  }

  public get smallThumbnailUrl(): string | null {
    return this.searchItemService.getSmallThumbnailUrl(this.searchItem);
  }

  public get publishedAt(): string {
    return this.searchItemService.getPublishedAt(this.searchItem);
  }

  public get socialsInfo(): Nullable<StatisticsInterface> {
    return this.searchItemService.getSocialsInfo(this.searchItem);
  }

  public openMore(): void {
    this.router.navigate([MAIN_PAGE_ROUTE, this.searchItem.id]);
  }
}
