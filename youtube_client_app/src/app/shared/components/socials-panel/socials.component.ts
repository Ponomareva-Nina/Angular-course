import { Component, Input } from '@angular/core';
import { StatisticsInterface } from '../../../core/models/search-item.model';
import { SocialInterface } from './socials.model';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() public socialsData!: StatisticsInterface;

  public getSocials(): SocialInterface[] {
    return [
      {
        img: './assets/viewed.svg',
        data: this.socialsData.viewCount,
      },
      {
        img: './assets/liked.svg',
        data: this.socialsData.likeCount,
      },
      {
        img: './assets/dislike.svg',
        data: this.socialsData.dislikeCount,
      },
      {
        img: './assets/comments.svg',
        data: this.socialsData.commentCount,
      },
    ];
  }
}
