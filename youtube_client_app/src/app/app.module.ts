import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import ProfileComponent from './header/profile/profile.component';
import SearchListComponent from './search/search-list/search-list.component';
import SearchItemComponent from './search/search-item/search-item.component';
import { SearchPanelComponent } from './header/search-panel/search-panel.component';
import { SortPanelComponent } from './header/sort-panel/sort-panel.component';

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
