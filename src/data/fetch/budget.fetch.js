export function fetchBudget(id) {
  const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

  return promise;
}

export function fetchBudgetedCategories(budgetId) {
  const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${budgetId}/budgetCategories`);

  return promise;
}

export function addBudgetTransaction({ budgetId, data }) {
  // https://github.com/typicode/json-server/issues/925
  // https://github.com/codekraft-studio/json-server/commit/5f495f0e02e8df47224b2afb3af511fa2e6f806e
  const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return promise;
}
