import React, { useMemo } from 'react';
import 'styled-components/macro';
import { groupBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import { ToggleableList } from 'components';

import ParentCategory from './ParentCategory';
import CategoryItem from './CategoryItem';

const BudgetCategoryList = ({ budgetedCategories, allCategories, budget }) => {
  const { t } = useTranslation();
  const budgetedCategoriesByParent = useMemo(
    () => groupBy(budgetedCategories, item => allCategories.find(category => category.id === item.categoryId).parentCategory.name),
    [budgetedCategories, allCategories],
  );

  const listItems = useMemo(
    () => Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
      id: parentName,
      Trigger: ({ onClick }) => (
        <ParentCategory
          onClick={onClick}
          name={parentName}
          categories={categories}
          transactions={budget.transactions}
        />
      ),
      children: categories.map(item => (
        <CategoryItem
          key={item.id}
          categories={allCategories}
          transactions={budget.transactions}
          item={item}
        />
      )),
    })),
    [budgetedCategoriesByParent, allCategories, budget],
  );
  const totalSpent = budget.transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const restToSpent = budget.totalAmount - totalSpent;

  const amountTaken = budgetedCategories.reduce((acc, item) => {
    const categoryTransactions = budget.transactions
      .filter(transaction => transaction.categoryId === item.id);
    const categoryExpenses = categoryTransactions
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return acc + Math.max(item.budget, categoryExpenses);
  }, 0);

  const notBudgetedTransactions = budget.transactions
    .filter(transaction => !budgetedCategories.find(item => item.id === transaction.categoryId));
  const notBudgetedExpenses = notBudgetedTransactions
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const availableForRestCategories = budget.totalAmount - amountTaken - notBudgetedExpenses;

  return (
    <div>
      <div
        css={`
          border-bottom: ${({ theme }) => `5px solid ${theme.colors.gray.light}`};
        `}
      >
        <ParentCategory
          name={budget.name}
          amount={restToSpent}
        />
      </div>

      <ToggleableList
        items={listItems}
      />

      <div
        css={`
          border-top: ${({ theme }) => `5px solid ${theme.colors.gray.light}`};
        `}
      >
        <ParentCategory name={t('Other categories')} amount={availableForRestCategories} />
      </div>

    </div>
  );
};

BudgetCategoryList.defaultProps = {
  budgetedCategories: [
    {
      'id': 1,
      'budget': 100,
      'categoryId': 1,
      'budgetId': 1,
    },
    {
      'id': 2,
      'budget': 50,
      'categoryId': 2,
      'budgetId': 1,
    },
    {
      'id': 3,
      'budget': 500,
      'categoryId': 3,
      'budgetId': 1,
    },
    {
      'id': 4,
      'budget': 30,
      'categoryId': 4,
      'budgetId': 1,
    },
    {
      'id': 5,
      'budget': 20,
      'categoryId': 7,
      'budgetId': 1,
    },
  ],
};

export default BudgetCategoryList;
