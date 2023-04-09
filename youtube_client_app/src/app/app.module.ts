import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { AuthModule } from './auth/auth.module';
import CoreModule from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { Page404Module } from './page404/page404.module';
import { ApiInterceptor } from './api.interceptor';
import { AdminModule } from './admin/admin.module';

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
  ],
  providers: [HTTP_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export default class AppModule {}
