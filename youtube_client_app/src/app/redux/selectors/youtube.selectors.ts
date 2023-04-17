import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../reducers/youtube.reducer';

export const YoutubeSelector = createFeatureSelector<YoutubeState>('youtube');

export const YoutubeItemsSelector = createSelector(
  YoutubeSelector,
  (state) => state.items
);
