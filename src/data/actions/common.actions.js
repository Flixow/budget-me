import {
  ALL_CATEGORIES_GET,
} from 'data/constants';
import API from 'data/fetch';


export const fetchAllCategories = () => dispatch => {
  const promise = API.common.fetchAllCategories();

  return dispatch({
    type: ALL_CATEGORIES_GET,
    promise,
    // showToast: true,
    // tryAgain: () => dispatch(fetchAllCategories(data)),
  });
};
