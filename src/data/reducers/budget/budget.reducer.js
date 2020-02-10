import {
  LOADING_STATES,
  SET_SELECTED_PARENT_CATEGORY_ID,

  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,

  BUDGETED_CATEGORIES_GET_REQUEST,
  BUDGETED_CATEGORIES_GET_SUCCESS,
  BUDGETED_CATEGORIES_GET_FAILURE,

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

    case BUDGET_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case BUDGET_GET_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
        budget: action.req,
      };
    case BUDGET_GET_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
        budget: {},
      };

    case BUDGETED_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case BUDGETED_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
        budgetedCategories: action.req,
      };
    case BUDGETED_CATEGORIES_GET_FAILURE:
      delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        loadingState: newLoadingState,
        budgetedCategories: [],
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
