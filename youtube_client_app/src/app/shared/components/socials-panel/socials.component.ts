import { Component, Input } from '@angular/core';
import { StatisticsInterface } from '../../models/search-item.model';
import { SocialInterface } from './socials.model';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() public socialsData: StatisticsInterface | null = null;

  public getSocials(): SocialInterface[] {
    return [
      {
        img: './assets/viewed.svg',
        data: this.socialsData?.viewCount || '0',
      },
      {
        img: './assets/liked.svg',
        data: this.socialsData?.likeCount || '0',
      },
      {
        img: './assets/dislike.svg',
        data: this.socialsData?.favoriteCount || '0',
      },
      {
        img: './assets/comments.svg',
        data: this.socialsData?.commentCount || '0',
      },
    ];
  }
}
