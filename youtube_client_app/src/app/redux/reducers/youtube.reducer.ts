import { createReducer } from "@ngrx/store";
import { VideoResponseItem } from "src/app/shared/models/video-response.model";

export interface YoutubeState {
  items: Array<VideoResponseItem>
}

const InitialState = {
  items: []
}

export const YoutubeReducer = createReducer(
  InitialState,
);
