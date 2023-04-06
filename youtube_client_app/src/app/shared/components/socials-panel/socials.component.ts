import { Component, Input } from '@angular/core';
import { StatisticsInterface } from '../../models/search-item.model';
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
        name: 'views',
        img: './assets/viewed.svg',
        data: this.socialsData.viewCount,
      },
      {
        name: 'likes',
        img: './assets/liked.svg',
        data: this.socialsData.likeCount,
      },
      {
        name: 'dislikes',
        img: './assets/dislike.svg',
        data: this.socialsData.dislikeCount,
      },
      {
        name: 'comments',
        img: './assets/comments.svg',
        data: this.socialsData.commentCount,
      },
    ];
  }
}
