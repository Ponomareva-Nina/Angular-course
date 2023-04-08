import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AUTH_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
} from 'src/constants/routing-constants';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: AUTH_PAGE_ROUTE,
    pathMatch: 'full',
  },
  {
    path: MAIN_PAGE_ROUTE,
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: AUTH_PAGE_ROUTE,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page404/page404.module').then((m) => m.Page404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
