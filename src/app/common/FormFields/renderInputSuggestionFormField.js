import React from "react";
import { FormField, TextInput } from "grommet";

const renderInputSuggestionFormField = ({
  fetch,
  suggestions,
  value,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" error={touched && error} {...custom}>
      <TextInput
        {...input}
        {...custom}
        value={value}
        onChange={fetch}
        suggestions={suggestions}
      />
    </FormField>
  );
};

export default renderInputSuggestionFormField;
