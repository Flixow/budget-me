import React, { useMemo } from 'react';
import { noop } from 'lodash';
import { formatCurrency } from 'utils';

import { ParentCategory as Root, CategoryAmount } from './BudgetCategoryList.css';

const ParentCategory = ({
  onClick = noop, name, amount, categories,
  transactions,
}) => {
  const categoryLeftValue = useMemo(() => {
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

    return totalLeft;
  }, [categories, transactions]);

  const amountValue = useMemo(() => amount || categoryLeftValue, [amount, categoryLeftValue]);

  return (
    <Root onClick={onClick}>
      <span>{name}</span>
      <CategoryAmount negative={amountValue < 0}>
        {formatCurrency(amountValue)}
      </CategoryAmount>
    </Root>
  );
};

ParentCategory.defaultProps = {
  transactions: [],
  categories: [],
};

export default ParentCategory;
