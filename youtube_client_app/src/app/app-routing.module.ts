import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';

const routes: Routes = [
  {
    path: MAIN_PAGE_ROUTE,
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: '',
    redirectTo: MAIN_PAGE_ROUTE,
    pathMatch: 'full',
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
