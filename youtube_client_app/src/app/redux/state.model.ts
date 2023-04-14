import { VideoItem } from '../shared/models/admin-video-item';
import { VideoResponseItem } from '../shared/models/video-response.model';
import { AdminReducer, AdminState } from './reducers/admin.reducer';
import { YoutubeReducer, YoutubeState } from './reducers/youtube.reducer';

export interface State {
  admin: AdminState,
  youtube: YoutubeState,
}

export const reducers = {
  admin: AdminReducer,
  youtube: YoutubeReducer
}