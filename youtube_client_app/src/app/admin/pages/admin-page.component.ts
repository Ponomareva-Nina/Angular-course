import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public isformOpen = false;

  public openForm(): void {
    if (!this.isformOpen) {
      this.isformOpen = true;
    }    
  }

  public closeForm(): void {
    this.isformOpen = false;
  }
}
