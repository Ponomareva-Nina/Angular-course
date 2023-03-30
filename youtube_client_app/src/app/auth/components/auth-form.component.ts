import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export default class AuthFormComponent implements OnInit {
  public form!: FormGroup;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public login(): void {
    const data = this.form.value;
    this.authService.loginUser(data.username, data.password);
    if (this.authService.username) {
      this.router.navigate([MAIN_PAGE_ROUTE]);
    }
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
