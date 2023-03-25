import { Component, EventEmitter, Output } from '@angular/core';
import { AppSearchService } from 'src/app/main-page/search/services/app-search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Output() public onSettingsBtnClick: EventEmitter<void> = new EventEmitter();
  public searchInputValue = '';

  public constructor(protected appSearchService: AppSearchService) {}

  public handleClickOnSettingsBtn(): void {
    this.onSettingsBtnClick.emit();
  }

  public sendRequest(): void {
    if (this.searchInputValue.trim().length) {
      this.appSearchService.setSearchListVisible();
      this.searchInputValue = '';
    }
  }
}
