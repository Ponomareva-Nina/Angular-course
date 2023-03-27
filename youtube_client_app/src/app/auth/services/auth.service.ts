import { Injectable } from '@angular/core';
import { USERNAME_KEY } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userName = '';

  public get username(): string {
    return this.userName;
  }

  public set username(value: string) {
    this.userName = value;
    localStorage.setItem(USERNAME_KEY, value);
  }

  public checkUsername(): void {
    this.username = localStorage.getItem(USERNAME_KEY) || '';
  }
}
