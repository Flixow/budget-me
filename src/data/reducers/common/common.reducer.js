import {
  LOADING_STATES,
  ALL_CATEGORIES_GET_REQUEST,
  ALL_CATEGORIES_GET_SUCCESS,
  ALL_CATEGORIES_GET_FAILURE,
} from 'data/constants';

const defaultState = {
  state: LOADING_STATES.INITIAL,
  allCategories: [],
};

export default function me(state = defaultState, action) {
  switch (action.type) {
    case ALL_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        state: LOADING_STATES.LOADING,
      };
    case ALL_CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        state: LOADING_STATES.LOADED,
        allCategories: action.req,
      };
    case ALL_CATEGORIES_GET_FAILURE:
      return {
        ...state,
        state: LOADING_STATES.LOADED,
        allCategories: [],
      };
    default:
      return state;
  }
}
