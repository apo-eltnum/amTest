import { ADD_BOOKMARK, DELETE_BOOKMARK } from "../actions/types";

export default function favoritosReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case DELETE_BOOKMARK:
      return state.filter((bookmark) => bookmark.name !== action.payload.name);
    default:
      return state;
  }
}
