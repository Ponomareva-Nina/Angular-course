/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AUTH_PAGE_ROUTE } from '../../../constants/routing-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(private router: Router, private authSevice: AuthService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  public canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean | UrlTree {
    const isExist = !!this.authSevice.username;
    return isExist || this.router.parseUrl(AUTH_PAGE_ROUTE);
  }
}
