import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userName = '';

  public get username(): string {
    return this.userName;
  }
}
