/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { loadItems, updateItems } from '../actions/youtube.actions';

@Injectable()
export class ApiEffects {
  public constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  private updateCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap((action) =>
        this.searchService
          .fetchResults(action.keyword)
          .pipe(map((cards) => updateItems({ cards })))
      )
    )
  );
}
