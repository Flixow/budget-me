import {
  SET_SELECTED_PARENT_CATEGORY_ID,
} from 'data/constants';

const defaultState = {
  selectedParentCategoryId: null,
};

export default function general(state = defaultState, action) {
  switch (action.type) {
    case SET_SELECTED_PARENT_CATEGORY_ID:
      return {
        ...state,
        selectedParentCategoryId: action.payload,
      };
    default:
      return state;
  }
}
