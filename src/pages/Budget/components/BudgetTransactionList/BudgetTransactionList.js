import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { formatDate, formatCurrency } from 'utils';

import { List, ListItem } from './BudgetTransactionList.css';

const BudgetTransactionList = ({ budget, allCategories, selectedParentCategoryId }) => {
  const filteredTransactionsBySelectedParentCategory = useMemo(() => {
    if (!selectedParentCategoryId) {
      return budget.transactions;
    }

    return budget.transactions.filter(transaction => {
      const parentCategoryName = allCategories.find(category => category.id === transaction.categoryId).parentCategory.name;

      return parentCategoryName === selectedParentCategoryId;
    });
  }, [selectedParentCategoryId, budget.transactions, allCategories]);
  const groupedTransactions = useMemo(() => groupBy(
    filteredTransactionsBySelectedParentCategory,
    item => new Date(item.date).getUTCDate(),
  ), [filteredTransactionsBySelectedParentCategory]);

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

export default connect(state => ({
  selectedParentCategoryId: state.budget.selectedParentCategoryId,
}))(BudgetTransactionList);
