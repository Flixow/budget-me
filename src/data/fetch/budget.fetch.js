export async function fetchBudget({ id }) {
  return (await fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`,
  )).json();
}

export async function fetchBudgetedCategories({ budgetId }) {
  return (await fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${budgetId}/budgetCategories`,
  )).json();
}

export async function addBudgetTransaction({ budgetId, data }) {
  // https://github.com/typicode/json-server/issues/925
  // https://github.com/codekraft-studio/json-server/commit/5f495f0e02e8df47224b2afb3af511fa2e6f806e
  const res = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}
