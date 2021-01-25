import React, { useState } from "react";
import { Box, Text, Button, Heading, Form } from "grommet";
import renderRadioButtonGroupField from "../../../app/common/FormFields/renderRadioButtonGroupField";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderDateInputField from "../../../app/common/FormFields/renderDateInputField";
import {
  combineValidators,
  matchesField,
  isRequired,
  composeValidators,
} from "revalidate";
import { Field, reduxForm } from "redux-form";
import { updateProfile } from "../userActions";
import { moment } from "moment";

const validate = combineValidators({
  displayName: isRequired({ message: "Please enter your display name" }),
  dateOfBirth: isRequired({ message: "Please enter your date of birth" }),
  city: isRequired({ message: "Please enter your city" }),
  gender: isRequired({ message: "Please enter your gender" }),
});

const BasicPage = ({
  submitting,
  error,
  invalid,
  pristine,
  handleSubmit,
  user,
  updateProfile,
}) => {
  const defaultValue = {
    displayName: user.displayName,
    dateOfBirth: user.dateOfBirth?.value,
    gender: user.gender,
    city: user.city,
  };
  const [value, setValue] = useState(defaultValue);
  console.log(user);
  return (
    <Box>
      <Box background="darkTwo" round="small" width="medium">
        <Heading level="3" margin="medium">
          Update profile
        </Heading>
        <Box pad="medium" width="medium">
          <Form
            value={value}
            onChange={(nextValue) => {
              console.log("Change", nextValue);
              setValue(nextValue);
            }}
            onReset={() => {
              setValue(defaultValue);
            }}
            onSubmit={handleSubmit(updateProfile)}
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
            <Box plain round="small" margin={{ bottom: "20px" }} color="white">
              <Field
                key="displayName"
                component={renderInputFormField}
                placeholder="Display name"
                value={value.displayName}
                name="displayName"
              />
            </Box>
            <Box plain round="small" color="white" margin={{ bottom: "20px" }}>
              <Field
                key="dateOfBirth"
                component={renderDateInputField}
                placeholder="Date of birth"
                value={value.dateOfBirth}
                name="dateOfBirth"
              />
            </Box>
            <Box plain round="small" margin={{ bottom: "20px" }} color="white">
              <Field
                key="city"
                component={renderInputFormField}
                placeholder="City"
                value={value.city}
                name="city"
              />
            </Box>
            <Box plain round="small" color="white" margin={{ bottom: "20px" }}>
              <Field
                key="gender"
                component={renderRadioButtonGroupField}
                options={["Male", "Female"]}
                value={value.gender}
                name="gender"
              />
            </Box>

            <Box direction="row" justify="center" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Update Password"
                color="brand"
                disabled={pristine || submitting}
                size="medium"
                style={{ width: "400px", height: "40px" }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default reduxForm({
  form: "updateProfileForm",
  enableReinitialize: true,
})(BasicPage);
