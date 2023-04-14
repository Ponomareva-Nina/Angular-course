import { Component, Input } from '@angular/core';
import { State } from '@ngrx/store';
import { VideoItem } from 'src/app/shared/models/admin-video-item';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent {
  public constructor(private state: State<any>) {}
  @Input() cardData!: VideoItem;
}
