import API from 'data/fetch';
import {
  SET_SELECTED_PARENT_CATEGORY_ID,
  BUDGET_GET,
  BUDGETED_CATEGORIES_GET,
} from 'data/constants';

export const selectParentCategory = name => {
  return {
    type: SET_SELECTED_PARENT_CATEGORY_ID,
    payload: name,
  };
};

export const fetchBudget = id => dispatch => {
  const promise = API.budget.fetchBudget(id);

  return dispatch({
    type: BUDGET_GET,
    promise,
    // showToast: true,
    // tryAgain: () => dispatch(fetchAllCategories(data)),
  });
};

export const fetchBudgetedCategories = id => dispatch => {
  const promise = API.budget.fetchBudgetedCategories(id);

  return dispatch({
    type: BUDGETED_CATEGORIES_GET,
    promise,
    // showToast: true,
    // tryAgain: () => dispatch(fetchAllCategories(data)),
  });
};
