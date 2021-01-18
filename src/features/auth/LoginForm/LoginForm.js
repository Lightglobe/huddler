import React, { Component } from "react";
import { Form, Box, Button, Text, TextInput, FormField } from "grommet";
import { Hide, View } from "grommet-icons";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderInputPasswordField from "../../../app/common/FormFields/renderPasswordFormField";
const defaultValue = {
  email: "",
  password: "",
};

class LoginForm extends Component {
  state = { value: defaultValue, reveal: true };
  setValue = (value) => this.setState({ value: value });
  setReveal = (revealValue) => {
    this.setState({ reveal: revealValue });
    console.log(this.state.reveal);
  };
  render() {
    const { submitting, error } = this.props;
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
          <Box plain round="small" color="white" margin={{ bottom: "20px" }}>
            <Field
              component={renderInputFormField}
              placeholder="Email"
              value={this.state.value}
              name="email"
            />
          </Box>

          <Box plain round="small" color="white">
            <Field
              component={renderInputPasswordField}
              placeholder="Password"
              value={this.state.password}
              name="password"
              reveal={this.state.reveal}
              setReveal={this.setReveal}
            />
          </Box>
          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Login"
              color="brand"
              onClick={() => this.props.history.push("/events")}
              disabled={error || submitting}
            />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default withRouter(reduxForm({ form: "loginForm" })(LoginForm));
