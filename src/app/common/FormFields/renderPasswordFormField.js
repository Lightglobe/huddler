import React from "react";

import { TextInput, Box, Button, FormField } from "grommet";
import { View, Hide } from "grommet-icons";

const renderInputPasswordField = ({
  reveal,
  setReveal,
  value,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <FormField border round="xsmall" {...custom} error={touched && error}>
      <Box direction="row" plain round="small" color="white" align="center">
        <TextInput
          plain
          placeholder="Password"
          type={reveal ? "text" : "password"}
          name="password"
          value={value}
          {...input}
          {...custom}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </FormField>
  );
};
export default renderInputPasswordField;
