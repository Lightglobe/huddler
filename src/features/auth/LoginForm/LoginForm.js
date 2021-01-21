import React, { Component } from "react";
import { Form, Box, Button, Text, Anchor } from "grommet";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderInputPasswordField from "../../../app/common/FormFields/renderPasswordFormField";
import { login, socialLogin } from "../authActions";
import { connect } from "react-redux";
import FacebookLogin from "../SocialLogin/FacebookLogin";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const mapStateToProps = (state) => ({
  creds: state.creds,
});

const actions = {
  login,
  socialLogin,
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
    const {
      submitting,
      error,
      pristine,
      login,
      socialLogin,
      handleSubmit,
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
          <Box margin={{ top: "20px" }} justify="center">
            <Anchor
              onClick={() => setShowRegister(true)}
              justify="center"
              color="brand"
            >
              Register new user?
            </Anchor>
          </Box>
          <Box direction="row" justify="center" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Login"
              color="brand"
              disabled={pristine || submitting}
              size="medium"
              style={{ width: "400px", height: "40px" }}
            />
          </Box>
          <GoogleLogin socialLogin={socialLogin} />
          <FacebookLogin socialLogin={socialLogin} />
        </Form>
      </Box>
    );
  }
}

export default withRouter(
  reduxForm({ form: "loginForm" })(connect(mapStateToProps, actions)(LoginForm))
);
