import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/core/header/header.component';
import ProfileComponent from './components/core/header/profile/profile.component';
import SearchListComponent from './components/shared/search/search-list/search-list.component';
import SearchItemComponent from './components/shared/search/search-item/search-item.component';
import { SearchPanelComponent } from './components/core/header/search-panel/search-panel.component';
import { SortPanelComponent } from './components/core/header/sort-panel/sort-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SearchListComponent,
    SearchItemComponent,
    SearchPanelComponent,
    SortPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
