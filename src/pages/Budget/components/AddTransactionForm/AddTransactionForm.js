import React, { useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import { noop, groupBy } from 'lodash';
import { Button } from 'components';

const required = value => (value ? undefined : 'Required');

const AddTransactionForm = ({ onSubmit = noop, categories, groupCategoriesBy }) => {
  const categoryItems = useMemo(() => groupCategoriesBy ?
    Object.entries(groupBy(categories, groupCategoriesBy))
      .map(([key, categories]) => (
        <optgroup key={key} label={key}>
          {categories.map(category => (
            <option value={category.id}>{category.name}</option>
          ))}
        </optgroup>
      )) : (
      categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    ), [groupCategoriesBy, categories]);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="description" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Description</label>
                <input {...input} type="text" placeholder="Description" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="amount" validate={required} parse={value => parseFloat(value, 10)}>
            {({ input, meta }) => (
              <div>
                <label>Amount</label>
                <input {...input} type="number" step="0.01" placeholder="Amount" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="categoryId" validate={required} parse={value => parseFloat(value, 10)}>
            {({ input, meta }) => (
              <div>
                <label>Category</label>
                <select {...input}>
                  {categoryItems}
                </select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="date" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Date</label>
                <input {...input} type="date" placeholder="Last Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <Button variant="regular" type="submit" disabled={submitting}>
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default AddTransactionForm;
