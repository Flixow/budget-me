import React from 'react';
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Required');

const AddTransactionForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>First Name</label>
                <input {...input} type="text" placeholder="First Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="lastName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Last Name</label>
                <input {...input} type="text" placeholder="Last Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default AddTransactionForm;
