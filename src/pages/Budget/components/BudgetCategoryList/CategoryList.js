import React from 'react';
import { formatCurrency } from 'utils';

import { CategoryList as Root, CategoryAmount } from './BudgetCategoryList.css';

const CategoryList = ({
  item,
  transactions, categories,
}) => {
  const categoryTransactions = transactions.filter(transaction => transaction.categoryId === item.id);
  const spentOnCategory = categoryTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalLeft = item.budget
    ? item.budget - spentOnCategory
    : null;

  return (
    <Root>
      <span>
        {categories.find(category => category.id === item.categoryId).name}
      </span>
      <span>
        <CategoryAmount negative={totalLeft < 0}>
          {formatCurrency(totalLeft)}
        </CategoryAmount>
      </span>
    </Root>
  );
};

CategoryList.defaultProps = {
  transactions: [],
  categories: [],
};

export default CategoryList;
