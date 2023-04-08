import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SearchService } from '../../../main-page/services/search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Output() public onSettingsBtnClick: EventEmitter<void> = new EventEmitter();
  public searchInputValue = '';

  public constructor(
    protected apiService: ApiService,
    protected searchService: SearchService
  ) {}

  public handleClickOnSettingsBtn(): void {
    this.onSettingsBtnClick.emit();
  }

  public sendRequest(): void {
    if (this.searchInputValue.trim().length) {
      this.searchService.updateSearchResult();
      this.searchInputValue = '';
    }
  }
}
