import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import dayjs from 'dayjs';
import {
  BLUE,
  GREEN,
  MONTH,
  RED,
  WEEK,
  HALF_YEAR,
  YELLOW,
} from '../constants/constants';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input() public publicationData = '';

  public constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    const dateNow = dayjs(new Date());
    const publicationDate = dayjs(this.publicationData);

    if (dateNow.diff(publicationDate, 'days') < WEEK) {
      this.setColor(BLUE);
    } else if (dateNow.diff(publicationDate, 'days') < MONTH) {
      this.setColor(GREEN);
    } else if (dateNow.diff(publicationDate, 'month') < HALF_YEAR) {
      this.setColor(YELLOW);
    } else {
      this.setColor(RED);
    }
  }

  private setColor(color: string): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'border-bottom',
      '.5rem solid'
    );
    this.renderer.setStyle(this.elRef.nativeElement, 'border-color', color);
  }
}
