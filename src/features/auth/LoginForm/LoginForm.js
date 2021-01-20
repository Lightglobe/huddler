import React, { Component } from "react";
import { Form, Box, Button, Text } from "grommet";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderInputPasswordField from "../../../app/common/FormFields/renderPasswordFormField";
import { login } from "../authActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  creds: state.creds,
});

const actions = {
  login,
};

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
    const { submitting, error, pristine, login, handleSubmit } = this.props;
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
          onSubmit={handleSubmit(login)}
        >
          {error && (
            <Box
              round="xsmall"
              margin={{ bottom: "20px" }}
              width="400px"
              background="#F23D3A"
            >
              <Text margin="small">{error}</Text>
            </Box>
          )}
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
              disabled={pristine || submitting}
            />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default withRouter(
  reduxForm({ form: "loginForm" })(connect(mapStateToProps, actions)(LoginForm))
);
