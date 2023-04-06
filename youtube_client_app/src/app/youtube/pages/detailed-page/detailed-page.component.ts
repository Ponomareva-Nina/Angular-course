/* eslint-disable no-return-assign */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  public searchItemID!: string;
  private sub!: Subscription;
  public constructor(public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.searchItemID = params['id'];
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
