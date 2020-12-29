import React, { Component } from "react";
import { Form, Box, FormField, Button, Text, TextInput } from "grommet";

const defaultValue = {};
export default class LoginForm extends Component {
  state = { value: defaultValue };
  setValue = (value) => this.setState({ value: value });
  render() {
    return (
      <Box>
        <Text
          size="large"
          weight="bold"
          margin={{ bottom: "medium" }}
          alignSelf="start"
        >
          Login
        </Text>
        <Form
          value={this.state.value}
          onChange={(nextValue, { touched }) => {
            console.log("Change", nextValue, touched);
            this.setValue(nextValue);
          }}
          onReset={() => {
            this.setValue(defaultValue);
          }}
          onSubmit={(event) => {
            console.log("Submit", event.value, event.touched);
          }}
        >
          <FormField
            margin={{ bottom: "xsmall" }}
            name="username"
            label="Username"
          >
            <TextInput name="username" />
          </FormField>
          <FormField
            margin={{ bottom: "xsmall" }}
            name="password"
            label="Password"
          >
            <TextInput type="password" name="password" />
          </FormField>

          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button type="submit" label="Login" color="brand" />
          </Box>
        </Form>
      </Box>
    );
  }
}
