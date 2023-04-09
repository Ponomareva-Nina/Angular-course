import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAIN_PAGE_ROUTE } from 'src/constants/routing-constants';
import { Nullable } from 'src/app/shared/models/types';
import { AuthService } from '../../core/services/auth.service';
import { PasswordValidators } from '../password.validators';

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
    if (this.form.valid) {
      const data = this.form.value;
      this.authService.loginUser(data.username, data.password);
    }
    if (this.authService.username) {
      this.router.navigate([MAIN_PAGE_ROUTE]);
    }
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl<string>('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        PasswordValidators.strongPassword,
      ]),
    });
  }

  public get loginInput(): Nullable<FormControl<string>> {
    return this.form.get('username') as FormControl;
  }

  public get loginRequiredError(): boolean {
    return this.form.get('username')?.errors?.['required'];
  }

  public get loginEmailError(): boolean {
    return this.form.get('username')?.errors?.['email'];
  }

  public get passwordInput(): Nullable<FormControl<string>> {
    return this.form.get('password') as FormControl;
  }

  public get passwordRequiredError(): boolean {
    return this.form.get('password')?.errors?.['required'];
  }

  public get passwordIsStrongError(): string[] {
    return this.form.get('password')?.errors?.['strongPassword'];
  }
}
