import { Component, Input } from '@angular/core';
import { SocialInterface } from './socials.model';
import { StatisticsInterface } from '../../models/search-item.model';
import { Nullable } from '../../models/types';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() public socialsData: Nullable<StatisticsInterface> = null;

  public getSocials(): Nullable<SocialInterface[]> {
    if (this.socialsData) {
      return [
        {
          img: './assets/viewed.svg',
          data: this.socialsData?.viewCount,
        },
        {
          img: './assets/liked.svg',
          data: this.socialsData?.likeCount,
        },
        {
          img: './assets/dislike.svg',
          data: this.socialsData?.favoriteCount,
        },
        {
          img: './assets/comments.svg',
          data: this.socialsData?.commentCount,
        },
      ];
    }
    return null;
  }
}
