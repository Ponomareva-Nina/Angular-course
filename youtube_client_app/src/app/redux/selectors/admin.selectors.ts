import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from '../reducers/admin.reducer';

export const AdminSelector = createFeatureSelector<AdminState>('admin');

export const AdminCardsSelector = createSelector(
  AdminSelector,
  (state) => state.items
);
