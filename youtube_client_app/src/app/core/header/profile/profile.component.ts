import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AUTH_PAGE_ROUTE } from '../../../../constants/routing-constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export default class ProfileComponent {
  public constructor(
    protected authService: AuthService,
    private router: Router
  ) {}

  public get authState(): Observable<boolean> {
    return this.authService.checkLogin();
  }

  public handleLoginClick(): void {
    this.router.navigate([AUTH_PAGE_ROUTE]);
  }

  public handleLogoutClick(): void {
    this.authService.LogoutUser();
    this.router.navigate([AUTH_PAGE_ROUTE]);
  }
}
