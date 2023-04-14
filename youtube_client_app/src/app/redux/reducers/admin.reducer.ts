import { createReducer } from "@ngrx/store";

const InitialState = {
  items: []
}

export const AdminReducer = createReducer(
  InitialState,
);
