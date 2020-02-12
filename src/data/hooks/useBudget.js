import { useQuery } from 'react-query';
import API from 'data/fetch';

function useBudget(id) {
  return useQuery(
    ['budget', { id }],
    API.budget.fetchBudget,
  );
}

export default useBudget;
