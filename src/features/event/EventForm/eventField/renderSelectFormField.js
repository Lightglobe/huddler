import React from "react";
import { FormField, Select } from "grommet";

const renderSelectFormField = ({
  value,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" error={touched && error} {...custom}>
      <Select {...custom} {...input} value={value} />
    </FormField>
  );
};

export default renderSelectFormField;
