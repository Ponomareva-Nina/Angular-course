import { createReducer } from "@ngrx/store";

const InitialState = {
  items: []
}

export const YoutubeReducer = createReducer(
  InitialState,
);
