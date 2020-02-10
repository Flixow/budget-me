import React, { useEffect, useMemo, useCallback } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Wrapper, LoadingIndicator, Button, Modal } from 'components';
import { fetchAllCategories } from 'data/actions/common.actions';
import { fetchBudget, fetchBudgetedCategories, addBudgetTransaction } from 'data/actions/budget.actions';

import { BudgetCategoryList, BudgetTransactionList } from './components';
import { Grid } from './Budget.css';
import AddTransactionForm from './components/AddTransactionForm';

const Budget = ({
  fetchAllCategories, fetchBudget, fetchBudgetedCategories, addBudgetTransaction,
  commonState, budgetState, budget, allCategories,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  useEffect(() => {
    fetchAllCategories();
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchAllCategories, fetchBudget, fetchBudgetedCategories]);
  const isLoaded = useMemo(
    () => commonState === 'LOADED' && Object.keys(budgetState).length === 0,
    [commonState, budgetState],
  );

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
          {isLoaded ? (
            <BudgetCategoryList />
          ) : (
            <LoadingIndicator />
          )}
        </section>
        <section>
          <Button variant="regular" to="/budget/transactions/new">{t('Add new transaction')}</Button>
          {isLoaded ? (
            <BudgetTransactionList />
          ) : (
            <LoadingIndicator />
          )}
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

export default connect(state => ({
  commonState: state.common.state,
  budgetState: state.budget.loadingState,
  budget: state.budget.budget,
  allCategories: state.common.allCategories,
}), {
  fetchAllCategories,
  fetchBudget,
  fetchBudgetedCategories,
  addBudgetTransaction,
})(Budget);
