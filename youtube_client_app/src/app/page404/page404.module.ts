import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './pages/page404.component';
import { Page404RoutingModule } from './page404.routing-module';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, Page404RoutingModule],
  exports: [Page404Component],
})
export class Page404Module {}
