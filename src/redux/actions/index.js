import { ADD_BOOKMARK, DELETE_BOOKMARK } from "./types";

export function addBookmark(character){
  return {type: ADD_BOOKMARK,payload:character}
}

export function deleteBookmark(character){
  return {type: DELETE_BOOKMARK,payload:character}
}
