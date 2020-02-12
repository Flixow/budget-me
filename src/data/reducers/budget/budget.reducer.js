import {
  SET_SELECTED_PARENT_CATEGORY_ID,

  BUDGET_TRANSACTION_ADD_SUCCESS,
  BUDGET_TRANSACTION_ADD_FAILURE,
} from 'data/constants';

const defaultState = {
  loadingState: {},
  selectedParentCategoryId: undefined,
  budget: {},
  budgetedCategories: [],
};

export default function budget(state = defaultState, action) {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case SET_SELECTED_PARENT_CATEGORY_ID:
      return {
        ...state,
        selectedParentCategoryId: action.payload,
      };

    case BUDGET_TRANSACTION_ADD_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
        budget: {
          ...state.budget,
          transactions: [
            action.req,
            ...state.budget.transactions,
          ],
        },
      };
    case BUDGET_TRANSACTION_ADD_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
      };
    default:
      return state;
  }
}
