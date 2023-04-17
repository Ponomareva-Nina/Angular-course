import { AdminReducer, AdminState } from './reducers/admin.reducer';
import { YoutubeReducer, YoutubeState } from './reducers/youtube.reducer';

export interface State {
  admin: AdminState;
  youtube: YoutubeState;
}

export const reducers = {
  admin: AdminReducer,
  youtube: YoutubeReducer,
};
