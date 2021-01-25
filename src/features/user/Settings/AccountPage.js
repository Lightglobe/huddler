import React, { useState } from "react";
import { Box, Text, Button, Heading, Form } from "grommet";
import renderInputPasswordField from "../../../app/common/FormFields/renderPasswordFormField";
import {
  combineValidators,
  matchesField,
  isRequired,
  composeValidators,
} from "revalidate";
import { Field, reduxForm } from "redux-form";
import GoogleLogin from "../../auth/SocialLogin/GoogleLogin";
import FacebookLogin from "../../auth/SocialLogin/FacebookLogin";

const validate = combineValidators({
  newPassword1: isRequired({ message: "Please enter your new password" }),
  newPassword2: composeValidators(
    isRequired({ message: "Please confirm your new password" }),
    matchesField("newPassword1")({ message: "Passwords must match" })
  )(),
});

const defaultValue = { newPassword1: "", newPassword2: "" };

const AccountPage = ({
  submitting,
  error,
  invalid,
  handleSubmit,
  updatePassword,
  socialLogin,
  providerId,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [reveal, setReveal] = useState(true);
  return (
    <Box>
      <Heading level="2" margin="medium">
        My Account
      </Heading>

      <Box background="darkTwo" round="small" width="medium">
        <Heading level="3" margin="medium">
          Reset password
        </Heading>
        <Box pad="medium" width="medium">
          {providerId && providerId === "password" && (
            <Form
              value={value}
              onChange={(nextValue) => {
                console.log("Change", nextValue);
                setValue(nextValue);
              }}
              onReset={() => {
                setValue(defaultValue);
              }}
              onSubmit={handleSubmit(updatePassword)}
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
              <Box
                plain
                round="small"
                margin={{ bottom: "20px" }}
                color="white"
              >
                <Field
                  key="newPassword1"
                  component={renderInputPasswordField}
                  placeholder="New password"
                  value={value.newPassword1}
                  name="newPassword1"
                  reveal={reveal}
                  setReveal={setReveal}
                  validate={validate.newPassword1}
                />
              </Box>
              <Box plain round="small" color="white">
                <Field
                  key="newPassword2"
                  component={renderInputPasswordField}
                  placeholder="Repeat new password"
                  value={value.newPassword2}
                  name="newPassword2"
                  reveal={reveal}
                  setReveal={setReveal}
                  validate={validate.newPassword2}
                />
              </Box>
              <Box direction="row" justify="center" margin={{ top: "medium" }}>
                <Button
                  type="submit"
                  label="Update Password"
                  color="brand"
                  disabled={invalid || submitting}
                  size="medium"
                  style={{ width: "400px", height: "40px" }}
                />
              </Box>
            </Form>
          )}
          {providerId && providerId === "google.com" && (
            <GoogleLogin socialLogin={socialLogin} />
          )}
          {providerId && providerId === "facebook.com" && (
            <FacebookLogin socialLogin={socialLogin} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default reduxForm({ form: "updatePasswordForm", validate })(AccountPage);
