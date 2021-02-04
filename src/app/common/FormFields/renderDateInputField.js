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
      <DateInput
        {...custom}
        {...input}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={(e, val) => input.onBlur(val)}
        value={value}
        onChangeRaw={(e) => e.preventDefault()}
        format="dd/mm/yyyy"
      />
    </FormField>
  );
};

export default renderDateInputField;
