import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCard } from 'src/app/redux/actions/admin.actions';
import { VideoItem } from 'src/app/shared/models/admin-video-item';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent {
  public constructor(private store: Store) {}
  @Input() cardData!: VideoItem;

  public deleteCardItem() {
    this.store.dispatch(deleteCard({id: this.cardData.id}))
  }
}
