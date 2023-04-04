import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnDestroy {
  @Output() public onSettingsBtnClick: EventEmitter<void> = new EventEmitter();
  public searchInputValue = '';
  private subscription!: Subscription;

  public constructor(
    protected searchService: SearchService,
    private router: Router
  ) {}

  public handleClickOnSettingsBtn(): void {
    this.onSettingsBtnClick.emit();
  }

  public handleClickOnSearchBtn(): void {
    if (this.searchInputValue.trim().length) {
      this.subscription = this.searchService
        .fetchResults(this.searchInputValue)
        .subscribe((items) => {
          console.log(items);
          this.searchService.setSearchResults(items);
        });
    }

    if (this.router.routerState.snapshot.url.slice(1) !== MAIN_PAGE_ROUTE) {
      this.router.navigate([MAIN_PAGE_ROUTE]);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
