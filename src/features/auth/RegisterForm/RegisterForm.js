import React, { Component } from "react";
import { Form, Box, Button, Text, Anchor } from "grommet";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderInputPasswordField from "../../../app/common/FormFields/renderPasswordFormField";
import { connect } from "react-redux";
import { registerUser } from "../authActions";
const mapStateToProps = (state) => ({
  creds: state.creds,
});

const actions = {
  registerUser,
};

const defaultValue = {
  email: "",
  password: "",
  displayName: "",
};

class RegisterForm extends Component {
  state = { value: defaultValue, reveal: true };
  setValue = (value) => this.setState({ value: value });
  setReveal = (revealValue) => {
    this.setState({ reveal: revealValue });
    console.log(this.state.reveal);
  };

  render() {
    const {
      submitting,
      error,
      pristine,
      login,
      handleSubmit,
      registerUser,
      setShowRegister,
    } = this.props;
    return (
      <Box>
        <Text
          size="large"
          weight="bold"
          margin={{ bottom: "medium" }}
          alignSelf="start"
        >
          Register new user
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
          onSubmit={handleSubmit(registerUser)}
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
              placeholder="Display Name"
              value={this.state.value}
              name="displayName"
            />
          </Box>
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

          <Box margin={{ top: "20px" }}>
            <Anchor onClick={() => setShowRegister(false)} color="brand">
              Login instead?
            </Anchor>
          </Box>

          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Register"
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
  reduxForm({ form: "registerForm" })(
    connect(mapStateToProps, actions)(RegisterForm)
  )
);
