import { ACTIONS } from "../constants/types";
const initialState = {
  search: false,
  delete: false
};

export const setDeletedReducer = (state = initialState, { type, payload }) => {
  console.log(state);
  // console.log(type)
  switch (type) {
    case ACTIONS.SET_DELETE:
      return {
        ...state,
        delete: !state.delete,
      }
    case ACTIONS.SET_SEARCH:
      return {
        ...state,
        search: !state.search,
      };
    default:
      return state;
  }
};
