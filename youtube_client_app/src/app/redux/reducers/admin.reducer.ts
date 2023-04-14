import { createReducer, on } from "@ngrx/store";
import { addCard } from "../actions/admin.actions";
import { VideoItem } from "src/app/shared/models/admin-video-item";

export interface AdminState {
  items: Array<VideoItem>
}

const InitialState: AdminState = {
  items: []
}

export const AdminReducer = createReducer(
  InitialState,
  on(addCard, (state, {item}) => ({
    ...state,
    items: [...state.items, item]
  })
  )
);
