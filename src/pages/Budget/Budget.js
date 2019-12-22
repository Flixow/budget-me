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
    'name': 'Kwiecień',
    'totalAmount': 2400,
    'transactions': [
      {
        'id': 1,
        'description': 'Dostawca internetu',
        'amount': 300,
        'categoryId': 1,
        'date': '2019-12-15T20:39:41.768Z',
        'budgetId': 1,
      },
      {
        'id': 2,
        'description': 'Dostawca sieci komórkowej',
        'amount': 50,
        'categoryId': 2,
        'date': '2019-12-10T13:33:21.768Z',
        'budgetId': 1,
      },
      {
        'id': 3,
        'description': 'Cotygodniowe zakupy',
        'amount': 20,
        'categoryId': 6,
        'date': '2019-12-17T15:41:01.768Z',
        'budgetId': 1,
      },
      {
        'id': 4,
        'description': 'Cotygodniowe zakupy #2',
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
        'name': 'Rachunki i media',
      },
    },
    {
      'id': 2,
      'name': 'Komórka',
      'parentCategoryId': 2,
      'parentCategory': {
        'id': 2,
        'name': 'Rachunki i media',
      },
    },
    {
      'id': 3,
      'name': 'Czynsz i wynajem',
      'parentCategoryId': 2,
      'parentCategory': {
        'id': 2,
        'name': 'Rachunki i media',
      },
    },
    {
      'id': 4,
      'name': 'Alkohol',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Zakupy',
      },
    },
    {
      'id': 5,
      'name': 'Spozywcze',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Zakupy',
      },
    },
    {
      'id': 6,
      'name': 'Chemia',
      'parentCategoryId': 1,
      'parentCategory': {
        'id': 1,
        'name': 'Zakupy',
      },
    },
  ],
};

export default Budget;
