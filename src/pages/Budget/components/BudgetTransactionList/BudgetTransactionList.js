import React, { useMemo } from 'react';
import { groupBy } from 'lodash';
import { formatDate, formatCurrency } from 'utils';

import { List, ListItem } from './BudgetTransactionList.css';

const BudgetTransactionList = ({ budget, allCategories }) => {
  const groupedTransactions = useMemo(() => groupBy(
    budget.transactions,
    item => new Date(item.date).getUTCDate(),
  ), [budget.transactions]);

  return (
    <List>
      {Object.entries(groupedTransactions).map(([key, transactions]) => (
        <ul key={key}>
          {transactions.map(transaction => (
            <ListItem key={transaction.id}>
              <div>{transaction.description}</div>
              <div>{formatCurrency(transaction.amount)}</div>
              <div>{formatDate(transaction.date)}</div>
              <div>{allCategories.find(category => category.id === transaction.categoryId).name}</div>
            </ListItem>
          ))}
        </ul>
      ))}
    </List>
  );
};

export default BudgetTransactionList;
