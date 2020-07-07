import { GET_FULL_LIST, ADD_NEW_COURSE, FILTER_LIST } from "./actionsType";

export function getFullList() {
    return {
      type: GET_FULL_LIST,
    };
  }
export function addNewCourse(item) {
  return{
    type: ADD_NEW_COURSE,
    payload: item,
  };
}

export function getFilteredList(text){
  return{
    type: FILTER_LIST,
    payload: text
  }
}
