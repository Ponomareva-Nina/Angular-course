import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import HeaderComponent from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import ProfileComponent from './header/profile/profile.component';
import { SearchPanelComponent } from './header/search-panel/search-panel.component';
import { SearchSettingsPanelComponent } from './header/search-settings-panel/search-settings-panel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchPanelComponent,
    SearchSettingsPanelComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    ProfileComponent,
    SearchPanelComponent,
    SearchSettingsPanelComponent,
    LogoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export default class CoreModule {}
