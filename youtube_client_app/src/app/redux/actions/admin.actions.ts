import { createAction, props } from '@ngrx/store';
import { VideoItem } from 'src/app/shared/models/admin-video-item';

export const addCard = createAction(
  '[ADMIN] addCard',
  props<{ item: VideoItem }>()
);
export const deleteCard = createAction(
  '[ADMIN] deleteCard',
  props<{ id: number }>()
);
