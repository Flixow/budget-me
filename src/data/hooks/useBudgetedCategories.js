import { useQuery } from 'react-query';
import API from 'data/fetch';

function useBudgetedCategories(id) {
  return useQuery(
    ['budgetedCategories', { budgetId: id }],
    API.budget.fetchBudgetedCategories,
  );
}

export default useBudgetedCategories;
