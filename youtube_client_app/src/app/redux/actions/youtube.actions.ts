import { createAction, props } from '@ngrx/store';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';


export const loadItems = createAction(
  '[YOUTUBE API] Load Items',
  props<{ keyword: string }>()
);

export const updateItems = createAction(
  '[YOUTUBE API] Update items',
  props<{ cards: Array<VideoResponseItem> | string }>()
);