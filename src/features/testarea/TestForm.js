import React from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Box, Select, DateInput, MaskedInput } from "grommet";
import { TextInput, FormField } from "grommet";
import { Clock } from "grommet-icons";

const renderInputFormField = ({ input, ...custom }) => (
  <FormField border round="small" {...input}>
    <TextInput {...custom} {...input} />
  </FormField>
);

const renderSelectFormField = ({ input, ...rest }) => {
  console.log(input);
  return (
    <FormField border round="small" {...input} {...rest}>
      <Select inputProps={{ name: "category" }} {...rest} value={input.value} />
    </FormField>
  );
};

const renderDateInputField = ({ input, ...custom }) => (
  <FormField border round="small" {...input}>
    <DateInput {...custom} format={"dd/mm/yyyy"} />
  </FormField>
);

const renderMaskedInputField = ({ input, ...custom }) => (
  <Box direction="row" border round="small" align="center">
    <MaskedInput
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
      name="time"
    />
    <Box pad={{ right: "15px" }}>
      <Clock />
    </Box>
  </Box>
);

const validate = (values) => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const handleSubmit = (props) => {
  console.log("Submitted");
};

const TestForm = (props) => {
  const { pristine, reset, submitting, classes } = props;

  return (
    <Form onSubmit={handleSubmit} validate="submit">
      <Box direction="column" background="darkOne" pad="large">
        <Box margin={{ bottom: "20px" }}>
          <Field
            name="firstName"
            placeholder={"First name"}
            component={renderInputFormField}
          />
        </Box>
        <Box margin={{ bottom: "20px" }}>
          <Field
            name="category"
            options={["drinks", "food", "culture"]}
            placeholder="Category"
            component={renderSelectFormField}
          />
        </Box>
        <Box margin={{ bottom: "20px" }}>
          <Field
            value={(e) => e.target.value}
            name="date"
            component={renderDateInputField}
          />
        </Box>
        <Box margin={{ bottom: "20px" }}>
          <Field component={renderMaskedInputField} />
        </Box>
        <Box margin={{ top: "medium" }}>
          <Button secondary type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default reduxForm({ form: "testForm" })(TestForm);
