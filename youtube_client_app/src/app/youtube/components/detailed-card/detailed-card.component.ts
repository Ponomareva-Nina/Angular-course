import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { SearchItemService } from 'src/app/core/services/search-item.service';
import {
  SearchItemInterface,
  StatisticsInterface,
} from 'src/app/shared/models/search-item.model';
import { NOT_FOUND } from 'src/constants/routing-constants';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit {
  @Input() public id = '';
  public searchItem!: SearchItemInterface;

  public constructor(
    private apiService: ApiService,
    private searchItemService: SearchItemService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const item = this.apiService.getItem(this.id);
    if (item) {
      this.searchItem = item;
    } else {
      this.router.navigate([NOT_FOUND]);
    }
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

  public get socialsInfo(): StatisticsInterface {
    return this.searchItemService.getSocialsInfo(this.searchItem);
  }

  public get description(): string {
    return this.searchItemService.getDescription(this.searchItem);
  }
}
