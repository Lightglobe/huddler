import React from "react";
import { FormField, DateInput } from "grommet";

const renderDateInputField = ({
  value,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" {...custom} error={touched && error}>
      <DateInput {...custom} {...input} value={value} format="dd/mm/yyyy" />
    </FormField>
  );
};

export default renderDateInputField;
