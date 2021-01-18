import React from "react";
import { TextArea, FormField } from "grommet";

const renderTextAreaField = ({
  value,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" {...custom} error={touched && error}>
      <TextArea {...custom} {...input} value={value} />
    </FormField>
  );
};

export default renderTextAreaField;
