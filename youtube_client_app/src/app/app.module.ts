import { NgModule, Provider, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { AuthModule } from './auth/auth.module';
import CoreModule from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { Page404Module } from './page404/page404.module';
import { ApiInterceptor } from './api.interceptor';
import { AdminModule } from './admin/admin.module';
import { reducers } from './redux/state.model';
import { ApiEffects } from './redux/effects/youtube.effects';

const HTTP_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    YoutubeModule,
    Page404Module,
    AdminModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([ApiEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [HTTP_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export default class AppModule {}
