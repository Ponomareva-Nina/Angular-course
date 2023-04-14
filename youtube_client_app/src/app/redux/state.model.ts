import { VideoItem } from '../shared/models/admin-video-item';
import { VideoResponseItem } from '../shared/models/video-response.model';
import { AdminReducer } from './reducers/admin.reducer';
import { YoutubeReducer } from './reducers/youtube.reducer';

export interface State {
  admin: {
    items: Array<VideoItem>
  },
  youtube: {
    items: Array<VideoResponseItem>
  }
}

export const reducers = {
  admin: AdminReducer,
  youtube: YoutubeReducer
}