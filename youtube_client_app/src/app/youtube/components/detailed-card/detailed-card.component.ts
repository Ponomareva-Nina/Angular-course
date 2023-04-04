import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SearchItemService } from 'src/app/core/services/search-item.service';
import {
  SearchItemInterface,
  StatisticsInterface,
} from 'src/app/shared/models/search-item.model';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit, OnDestroy {
  @Input() public id = '';
  public searchItem: SearchItemInterface | null = null;
  private sub!: Subscription;

  public constructor(
    private searchItemService: SearchItemService,
    private searchService: SearchService
  ) {}

  public ngOnInit(): void {
    this.sub = this.searchService.fetchItem(this.id).subscribe((item) => {
      this.searchItem = item;
      console.log(this.searchItem);
    });
  }

  public get title(): string {
    return this.searchItemService.getTitle(this.searchItem);
  }

  public get thumbnailUrl(): string {
    return this.searchItemService.getFullThumbnailUrl(this.searchItem);
  }

  public get publishedAt(): string {
    return this.searchItemService.getPublishedAt(this.searchItem);
  }

  public get socialsInfo(): StatisticsInterface | null {
    return this.searchItemService.getSocialsInfo(this.searchItem);
  }

  public get description(): string {
    return this.searchItemService.getDescription(this.searchItem);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
