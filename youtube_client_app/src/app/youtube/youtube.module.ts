import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { YoutubeRoutingModule } from './youtube.routing-module';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import SearchItemComponent from './components/search-results/search-item/search-item.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    BorderColorDirective,
    SortPipe,
    FilterPipe,
    MainPageComponent,
    DetailedPageComponent,
    DetailedCardComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [],
  exports: [MainPageComponent, DetailedPageComponent],
})
export class YoutubeModule {}
