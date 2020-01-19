import React, { useMemo, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import 'styled-components/macro';
import { groupBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import { ToggleableList } from 'components';
import { selectParentCategory } from 'data/actions/budget.actions';

import ParentCategory from './ParentCategory';
import CategoryItem from './CategoryItem';


const BudgetCategoryList = ({ budgetedCategories, allCategories, budget, selectParentCategory }) => {
  const { t } = useTranslation();
  const handleClickParentCategoryRef = useRef(null);
  const budgetedCategoriesByParent = useMemo(
    () => groupBy(budgetedCategories, item => allCategories.find(category => category.id === item.categoryId).parentCategory.name),
    [budgetedCategories, allCategories],
  );
  const handleClearParentCategorySelect = useCallback(() => {
    selectParentCategory();
    handleClickParentCategoryRef.current();
  }, [selectParentCategory, handleClickParentCategoryRef]);
  const handleSelectRestParentCategory = useCallback(() => {
    selectParentCategory(null);
    handleClickParentCategoryRef.current();
  }, [selectParentCategory, handleClickParentCategoryRef]);

  const listItems = useMemo(
    () => Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
      id: parentName,
      Trigger: ({ onClick }) => (
        <ParentCategory
          onClick={useCallback(() => {
            onClick();
            selectParentCategory(parentName);
          }, [onClick])}
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
    [budgetedCategoriesByParent, allCategories, budget, selectParentCategory],
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
          onClick={handleClearParentCategorySelect}
        />
      </div>

      <ToggleableList
        items={listItems}
        clickRef={handleClickParentCategoryRef}
      />

      <div
        css={`
          border-top: ${({ theme }) => `5px solid ${theme.colors.gray.light}`};
        `}
      >
        <ParentCategory
          name={t('Other categories')}
          amount={availableForRestCategories}
          onClick={handleSelectRestParentCategory}
        />
      </div>
    </div>
  );
};

BudgetCategoryList.defaultProps = {
  budgetedCategories: [],
  budget: {},
  allCategories: [],
};

export default connect(store => ({
  allCategories: store.common.allCategories,
  budget: store.budget.budget,
  budgetedCategories: store.budget.budgetedCategories,
}), {
  selectParentCategory,
})(BudgetCategoryList);
