import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/main-page/services/search.service';
import { SortOptions } from 'src/constants/sort-options';

@Component({
  selector: 'app-search-settings-panel',
  templateUrl: './search-settings-panel.component.html',
  styleUrls: ['./search-settings-panel.component.scss'],
})
export class SearchSettingsPanelComponent {
  @ViewChild('sortByWordInput') public sortByWordInputRef!: ElementRef;
  public currentSort: SortOptions | null = null;
  public constructor(protected searchService: SearchService) {}

  public focusSortByWordInput(): void {
    this.sortByWordInputRef.nativeElement.focus();
  }

  public setSortByDate(): void {
    if (this.currentSort === SortOptions.DATE_ASC) {
      this.currentSort = SortOptions.DATE_DESC;
    } else {
      this.currentSort = SortOptions.DATE_ASC;
    }
    this.searchService.currentSort = this.currentSort;
  }

  public setSortByViews(): void {
    if (this.currentSort === SortOptions.VIEWS_ASC) {
      this.currentSort = SortOptions.VIEWS_DESC;
    } else {
      this.currentSort = SortOptions.VIEWS_ASC;
    }
    this.searchService.currentSort = this.currentSort;
  }

  public updateKeyword(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.searchService.updateKeywordFilter(input.value);
  }
}
