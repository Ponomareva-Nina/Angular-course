import { createReducer, on } from '@ngrx/store';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';
import { loadItems, updateItems } from '../actions/youtube.actions';

export interface YoutubeState {
  items: Array<VideoResponseItem> | string;
  status: string;
}

const InitialState: YoutubeState = {
  items: [],
  status: '',
};

export const YoutubeReducer = createReducer(
  InitialState,
  on(loadItems, (state): YoutubeState => ({ ...state, status: 'loading' })),

  on(
    updateItems,
    (state, { cards }): YoutubeState => ({
      ...state,
      items: cards,
      status: 'success',
    })
  )
);
