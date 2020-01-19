import { combineReducers } from 'redux';

import budget from './budget/budget.reducer';
import common from './common/common.reducer';

const rootReducer = combineReducers({
  budget,
  common,
});

export default rootReducer;
