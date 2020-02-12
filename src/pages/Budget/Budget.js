import React, { useCallback, lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Wrapper, Button, Modal, SuspenseErrorBoundary } from 'components';
import { addBudgetTransaction } from 'data/actions/budget.actions';
import API from 'data/fetch';

import { Grid } from './Budget.css';
import AddTransactionForm from './components/AddTransactionForm';

const BudgetCategoryList = lazy(() => import('./components/BudgetCategoryList'));
const BudgetTransactionList = lazy(() => import('./components/BudgetTransactionList'));

const Budget = ({
  addBudgetTransaction,
  budget,
}) => {
  const { data: allCategories } = useQuery(
    ['allCategories'],
    API.common.fetchAllCategories,
  );
  const [showTransactions, setShowTransactions] = React.useState(false);
  const { t } = useTranslation();
  const history = useHistory();

  const handleAddTransaction = useCallback(data => {
    addBudgetTransaction({
      id: budget.id,
      data,
    }).then(() => {
      history.goBack();
    });
  }, [addBudgetTransaction, budget, history]);

  return (
    <Wrapper>
      <Grid>
        <section>
          <SuspenseErrorBoundary>
            <BudgetCategoryList />
          </SuspenseErrorBoundary>
        </section>
        <section>
          <Button variant="regular" to="/budget/transactions/new">{t('Add new transaction')}</Button>
          <Button variant="regular" onClick={() => setShowTransactions(!showTransactions)}>
            {!showTransactions ? t('Show transactions') : t('Hide transactions')}
          </Button>
          <SuspenseErrorBoundary>
            {showTransactions && (
              <BudgetTransactionList />
            )}
          </SuspenseErrorBoundary>
        </section>
      </Grid>

      <Switch>
        <Route exact path="/budget/transactions/new">
          <Modal>
            <AddTransactionForm
              onSubmit={handleAddTransaction}
              categories={allCategories}
              groupCategoriesBy="parentCategory.name"
            />
          </Modal>
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default connect(null, {
  addBudgetTransaction,
})(Budget);
