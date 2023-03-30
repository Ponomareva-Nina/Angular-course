import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export default class ProfileComponent {
  public constructor(private authService: AuthService) {}

  public name = this.authService.username || 'Your name';
}
