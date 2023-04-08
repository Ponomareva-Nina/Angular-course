/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { USERNAME_KEY, USERNAME_TOKEN } from '../../auth/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userName = localStorage.getItem(USERNAME_KEY) || '';

  public get username(): string {
    return this.userName;
  }

  public loginUser(name: string, password: string): boolean {
    if (name && password) {
      this.userName = name;
      const mockToken = this.generateMockToken();
      localStorage.setItem(USERNAME_KEY, name);
      localStorage.setItem(USERNAME_TOKEN, mockToken);
      return true;
    }
    return false;
  }

  public LogoutUser(): void {
    this.userName = '';
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
