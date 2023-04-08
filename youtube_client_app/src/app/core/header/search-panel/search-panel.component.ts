import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Output() public onSettingsBtnClick: EventEmitter<void> = new EventEmitter();
  public searchInputValue = '';

  public constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  public handleClickOnSettingsBtn(): void {
    this.onSettingsBtnClick.emit();
  }

  public handleClickOnSearchBtn(): void {
    if (this.searchInputValue.trim().length) {
      this.searchService.updateSearchResult();
    }
    this.router.navigate([MAIN_PAGE_ROUTE]);
  }
}
