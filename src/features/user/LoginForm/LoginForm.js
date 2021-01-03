import React, { Component } from "react";
import { Form, Box, Button, Text, TextInput } from "grommet";
import { Hide, View } from "grommet-icons";
import { withRouter } from "react-router-dom";
const defaultValue = {};
class LoginForm extends Component {
  state = { value: defaultValue, reveal: true };
  setValue = (value) => this.setState({ value: value });
  setReveal = (revealValue) => {
    this.setState({ reveal: revealValue });
    console.log(this.state.reveal);
  };

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
          <Box
            plain
            round="small"
            color="white"
            border={{ color: "white" }}
            margin={{ bottom: "20px" }}
          >
            <TextInput plain placeholder="Email" name="username" />
          </Box>

          <Box
            direction="row"
            plain
            round="small"
            color="white"
            border={{ color: "white" }}
            align="center"
          >
            <TextInput
              plain
              placeholder="Password"
              type={this.state.reveal ? "text" : "password"}
              name="password"
            />
            <Button
              icon={
                this.state.reveal ? (
                  <View size="medium" />
                ) : (
                  <Hide size="medium" />
                )
              }
              onClick={() => this.setReveal(!this.state.reveal)}
            />
          </Box>
          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Login"
              color="brand"
              onClick={() => this.props.history.push("/events")}
            />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default withRouter(LoginForm);
