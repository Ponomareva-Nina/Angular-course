import { createReducer, on } from '@ngrx/store';
import { VideoItem } from 'src/app/shared/models/admin-video-item';
import { addCard, deleteCard } from '../actions/admin.actions';

export interface AdminState {
  items: Array<VideoItem>;
}

const InitialState: AdminState = {
  items: [],
};

export const AdminReducer = createReducer(
  InitialState,
  on(
    addCard,
    (state, { item }): AdminState => ({
      ...state,
      items: [...state.items, item],
    })
  ),
  on(deleteCard, (state, { id }) => ({
    ...state,
    items: [...state.items].filter((item) => item.id !== id),
  }))
);
