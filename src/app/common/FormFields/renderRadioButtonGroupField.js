import React from "react";
import { RadioButtonGroup, FormField, Text, Heading } from "grommet";

const renderRadioButtonGroupField = ({
  value,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormField
      border
      round="xsmall"
      error={touched && error}
      {...custom}
      contentProps={{
        margin: "none",
        pad: "none",
      }}
    >
      <Heading level="4" margin={{ left: "20px", bottom: "5px" }}>
        {custom.title}
      </Heading>
      <RadioButtonGroup {...custom} {...input} value={value} margin="20px" />
    </FormField>
  );
};

export default renderRadioButtonGroupField;
