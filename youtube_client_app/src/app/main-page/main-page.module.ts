import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { MainPageRoutingModule } from './main-page.routing-module';
import { MainPageComponent } from './pages/main-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchListComponent from './search/search-list/search-list.component';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    BorderColorDirective,
    SortPipe,
    FilterPipe,
    MainPageComponent,
  ],
  imports: [CommonModule, SharedModule, MainPageRoutingModule],
  providers: [],
  exports: [
    SearchListComponent,
    SearchItemComponent,
    BorderColorDirective,
    SortPipe,
    FilterPipe,
    MainPageComponent,
  ],
})
export class MainPageModule {}
