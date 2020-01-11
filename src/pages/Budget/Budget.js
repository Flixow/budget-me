import React from 'react';
import { Wrapper } from 'components';

import { BudgetCategoryList, BudgetTransactionList } from './components';
import { Grid } from './Budget.css';

const Budget = ({ budget, allCategories }) => {
  return (
    <Wrapper>
      <Grid>
        <section>
          <BudgetCategoryList allCategories={allCategories} budget={budget} />
        </section>
        <section>
          <BudgetTransactionList allCategories={allCategories} budget={budget} />
        </section>
      </Grid>
    </Wrapper>
  );
};

Budget.defaultProps = {
  budget: {
    'id': 1,
    'name': 'April',
    'totalAmount': 2400,
    'transactions': [
      {
        'id': 1,
        'description': 'Internet provider',
        'amount': 300,
        'categoryId': 1,
        'date': '2019-12-15T20:39:41.768Z',
        'budgetId': 1,
      },
      {
        'id': 2,
        'description': 'Mobile network provider',
        'amount': 50,
        'categoryId': 2,
        'date': '2019-12-10T13:33:21.768Z',
        'budgetId': 1,
      },
      {
        'id': 3,
        'description': 'Weekly shoping',
        'amount': 20,
        'categoryId': 6,
        'date': '2019-12-17T15:41:01.768Z',
        'budgetId': 1,
      },
      {
        'id': 4,
        'description': 'Weekly shoping #2',
        'amount': 12.48,
        'categoryId': 6,
        'date': '2019-12-17T12:41:01.768Z',
        'budgetId': 1,
      },
    ],
  },
  allCategories: [
    {
      'id': 1,
      'name': 'Internet',
      'parentCategoryId': 2,
      'parentCategory': {
        'id': 2,
        'name': 'Bills and utilities',
      },
    },
    {
      'id': 2,
      'name': 'Mobile phone',
      'parentCategoryId': 2,
      'parentCategory': {
        'id': 2,
        'name': 'Bills and utilities',
      },
    },
    {
      'id': 3,
      'name': 'Rent',
      'parentCategoryId': 2,
      'parentCategory': {
        'id': 2,
        'name': 'Bills and utilities',
      },
    },
    {
      'id': 4,
      'name': 'Alcohol',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Shopping',
      },
    },
    {
      'id': 5,
      'name': 'Grocery',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Shopping',
      },
    },
    {
      'id': 6,
      'name': 'Chemistry',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Shopping',
      },
    },
    {
      'id': 7,
      'name': 'Udemy Course',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 4,
        'name': 'Education',
      },
    },
  ],
};

export default Budget;
