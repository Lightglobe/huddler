import React from "react";

import { TextInput, FormField } from "grommet";

const renderPassword = ({
  reveal,
  setReveal,
  value,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" {...custom} error={touched && error}>
      <TextInput
        plain
        placeholder="Password"
        type={reveal ? "text" : "password"}
        name="password"
        value={value}
        {...input}
        {...custom}
      />
    </FormField>
  );
};
export default renderPassword;
