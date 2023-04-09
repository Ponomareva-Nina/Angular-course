import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnDestroy, OnInit {
  @Output() public onSettingsBtnClick: EventEmitter<void> = new EventEmitter();
  public searchInput = new FormControl<string>('');
  private subscription!: Subscription;

  public constructor(
    protected searchService: SearchService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.subscription = this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => {
          if (value && value.trim().length) {
            return this.searchService.fetchResults(value);
          }
          return of(null);
        })
      )
      .subscribe((items) => {
        if (items) {
          this.navigateToSearchResults();
          this.searchService.setSearchResults(items);
        }
      });
  }

  public handleClickOnSettingsBtn(): void {
    this.onSettingsBtnClick.emit();
  }

  public navigateToSearchResults(): void {
    if (this.router.routerState.snapshot.url.slice(1) !== MAIN_PAGE_ROUTE) {
      this.router.navigate([MAIN_PAGE_ROUTE]);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
