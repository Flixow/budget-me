import React, { createContext, useState } from 'react';

const store = createContext({});
const { Provider } = store;

const BudgetProvider = ({ children }) => {
  const [selectedParentCategoryId, selectParentCategory] = useState();

  return (
    <Provider
      value={{
        selectedParentCategoryId,
        selectParentCategory,
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

