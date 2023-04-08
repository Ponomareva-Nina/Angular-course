import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const user = this.authService.username;
    if (user) {
      this.router.navigate([MAIN_PAGE_ROUTE]);
    }
  }
}
