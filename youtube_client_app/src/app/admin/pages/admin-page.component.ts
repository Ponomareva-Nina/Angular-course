import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AdminCardsSelector } from 'src/app/redux/selectors/admin.selectors';
import { VideoItem } from 'src/app/shared/models/admin-video-item';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  public constructor(private store: Store) {}

  private sub!: Subscription;
  public isformOpen = false;
  public adminCards: VideoItem[] = [];

  ngOnInit(): void {
    this.sub = this.store.select(AdminCardsSelector).subscribe((cards) => {
      this.adminCards = cards;
    });
  }

  public openForm(): void {
    if (!this.isformOpen) {
      this.isformOpen = true;
    }    
  }

  public closeForm(): void {
    this.isformOpen = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
