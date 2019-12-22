import React from 'react';
import { noop } from 'lodash';
import { formatCurrency } from 'utils';

import { ParentCategory as Root, CategoryAmount } from './BudgetCategoryList.css';

const ParentCategory = ({
  onClick = noop, name, categories, children,
  transactions,
}) => {
  const budgeted = (() => {
    try {
      return categories.reduce((acc, category) => acc + category.budget, 0);
    } catch (error) {
      return null;
    }
  })();
  const parentCategoryTransactions = transactions
    .filter(transaction => categories.find(category => category.categoryId === transaction.categoryId));
  const spentOnParentCategory = parentCategoryTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalLeft = budgeted
    ? budgeted - spentOnParentCategory
    : null;

  return (
    <Root onClick={onClick}>
      <span>{name}</span>
      {totalLeft && (
        <CategoryAmount negative={totalLeft < 0}>
          {formatCurrency(totalLeft)}
        </CategoryAmount>
      )}
      {children}
    </Root>
  );
};

ParentCategory.defaultProps = {
  transactions: [],
  categories: [],
};

export default ParentCategory;
