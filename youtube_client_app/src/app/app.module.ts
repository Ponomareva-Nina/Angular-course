import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/header/header.component';
import ProfileComponent from './core/header/profile/profile.component';
import SearchListComponent from './main-page/search/search-list/search-list.component';
import SearchItemComponent from './main-page/search/search-item/search-item.component';
import { SearchPanelComponent } from './core/header/search-panel/search-panel.component';
import { SearchSettingsPanelComponent } from './core/header/search-settings-panel/search-settings-panel.component';
import { LogoComponent } from './core/header/logo/logo.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SearchListComponent,
    SearchItemComponent,
    SearchPanelComponent,
    SearchSettingsPanelComponent,
    LogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
