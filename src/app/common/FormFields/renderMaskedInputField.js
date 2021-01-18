import React from "react";
import { Box, MaskedInput, FormField } from "grommet";
import { Clock } from "grommet-icons";

const renderMaskedInputField = ({
  value,
  input,
  meta: { touched, error },
  ...custom
}) => (
  <FormField {...custom} error={touched && error}>
    <Box direction="row" border round="xsmall" align="center">
      <MaskedInput
        error={touched && error}
        required
        plain
        mask={[
          {
            length: [1, 2],
            options: Array.from({ length: 12 }, (v, k) => k + 1),
            regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
            placeholder: "hh",
          },
          { fixed: ":" },
          {
            length: 2,
            options: ["00", "15", "30", "45"],
            regexp: /^[0-5][0-9]$|^[0-9]$/,
            placeholder: "mm",
          },
          { fixed: " " },
          {
            length: 2,
            options: ["a.m.", "p.m."],
            regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
            placeholder: "ap",
          },
        ]}
        value={value}
        name="time"
      />
      <Box pad={{ right: "15px" }}>
        <Clock />
      </Box>
    </Box>
  </FormField>
);

export default renderMaskedInputField;
