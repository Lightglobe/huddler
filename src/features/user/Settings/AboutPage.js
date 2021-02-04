import React, { useState } from "react";
import { Box, Text, Button, Form } from "grommet";
import { Field, reduxForm } from "redux-form";
import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderRadioButtonGroupField from "../../../app/common/FormFields/renderRadioButtonGroupField";
import renderTextAreaField from "../../../app/common/FormFields/renderTextAreaField";
import renderSelectFormField from "../../../app/common/FormFields/renderSelectFormField";
const defaultValue = {
  status: "",
  bio: "",
  interests: "",
  occupation: "",
  origin: "",
};

const AboutPage = ({
  submitting,
  error,
  invalid,
  handleSubmit,
  updateProfile,
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <Box>
      <Box background="darkTwo" round="small" width="medium">
        <Text margin="medium">
          Complete your profile to get the most out of Huddler
        </Text>
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
                key="status"
                component={renderRadioButtonGroupField}
                value={value.status}
                name="status"
                options={["Single", "Married"]}
                title={"Status"}
              />
            </Box>
            <Box plain round="small" margin={{ bottom: "20px" }} color="white">
              <Field
                key="bio"
                component={renderTextAreaField}
                value={value.bio}
                name="bio"
                placeholder="Tell us about your self"
              />
            </Box>
            <Box plain round="small" margin={{ bottom: "20px" }} color="white">
              <Field
                key="interests"
                component={renderSelectFormField}
                value={value.interests}
                options={[
                  "Drinks",
                  "Culture",
                  "Film",
                  "Food",
                  "Music",
                  "Travel",
                ]}
                name="interests"
                multiple={true}
              />
            </Box>
            <Box plain round="small" color="white" margin={{ bottom: "20px" }}>
              <Field
                key="occupation"
                component={renderInputFormField}
                placeholder="Occupation"
                value={value.occupation}
                name="occupation"
              />
            </Box>
            <Box plain round="small" color="white" margin={{ bottom: "20px" }}>
              <Field
                key="origin"
                component={renderInputFormField}
                placeholder="Country of origin"
                value={value.origin}
                name="origin"
              />
            </Box>
            <Box direction="row" justify="center" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Update"
                color="brand"
                disabled={invalid || submitting}
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
  form: "updateAboutMeForm",
  enableReinitialize: true,
})(AboutPage);
