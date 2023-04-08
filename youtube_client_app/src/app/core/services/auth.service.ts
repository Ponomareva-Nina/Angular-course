/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { USERNAME_KEY, USERNAME_TOKEN } from '../../auth/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userName = localStorage.getItem(USERNAME_KEY) || '';
  private login$ = new BehaviorSubject(!!this.username);

  public checkLogin(): Observable<boolean> {
    return this.login$.asObservable();
  }

  public get username(): string {
    return this.userName;
  }

  public loginUser(name: string, password: string): void {
    if (name && password) {
      this.userName = name;
      this.login$.next(true);
      const mockToken = this.generateMockToken();
      localStorage.setItem(USERNAME_KEY, name);
      localStorage.setItem(USERNAME_TOKEN, mockToken);
    }
  }

  public LogoutUser(): void {
    this.userName = '';
    this.login$.next(false);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(USERNAME_TOKEN);
  }

  private generateMockToken(): string {
    const length = 16;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < length; i += 1) {
      token += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return token;
  }
}
