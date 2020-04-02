import React, { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'selectParentCategory':
        return {
          selectedParentCategoryId: action.payload,
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

const BudgetContext = {
  store,
  Provider: BudgetProvider,
};

export default BudgetContext;

