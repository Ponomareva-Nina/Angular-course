import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminCardsSelector } from 'src/app/redux/selectors/admin.selectors';
import { VideoItem } from 'src/app/shared/models/admin-video-item';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public constructor(private store: Store) {}
  public isformOpen = false;
  public adminCards$: Observable<VideoItem[]> =
    this.store.select(AdminCardsSelector);

  public openForm(): void {
    if (!this.isformOpen) {
      this.isformOpen = true;
    }
  }

  public closeForm(): void {
    this.isformOpen = false;
  }

  // eslint-disable-next-line class-methods-use-this
  public trackById(item: VideoItem): string {
    return item.id.toString();
  }
}
