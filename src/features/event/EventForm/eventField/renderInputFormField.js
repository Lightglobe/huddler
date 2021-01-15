import React from "react";
import { FormField, TextInput } from "grommet";

const renderInputFormField = ({
  value,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" error={touched && error} {...custom}>
      <TextInput {...input} {...custom} value={value} />
    </FormField>
  );
};

export default renderInputFormField;
