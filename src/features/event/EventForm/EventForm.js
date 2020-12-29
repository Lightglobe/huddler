import { grommet, Heading, TextArea } from "grommet";
import React, { Component } from "react";
import {
  Form,
  Box,
  FormField,
  Button,
  Text,
  TextInput,
  Select,
  DateInput,
  Stack,
} from "grommet";

const defaultValue = {};
export default class EventForm extends Component {
  state = { value: defaultValue };
  setValue = (value) => this.setState({ value: value });
  render() {
    return (
      <Box>
        <Text
          size="large"
          weight="bold"
          margin={{ bottom: "small" }}
          alignSelf="start"
        >
          Create event
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
            name="title"
            label="Event Title"
          >
            <TextInput name="title" />
          </FormField>
          <FormField
            margin={{ bottom: "xsmall" }}
            name="description"
            label="Event Description"
          >
            <TextArea name="description" />
          </FormField>
          <FormField
            margin={{ bottom: "xsmall" }}
            name="category"
            label="Event Category"
          >
            <Select options={["drinks", "food", "culture"]} />
          </FormField>
          <FormField margin={{ bottom: "xsmall" }} name="city" label="City">
            <TextInput name="city" />
          </FormField>
          <FormField margin={{ bottom: "xsmall" }} name="venue" label="Venue">
            <TextInput name="venue" />
          </FormField>
          <FormField margin={{ bottom: "xsmall" }} name="date" label="Date">
            <DateInput name="date" format="dd/mm/yyyy" />
          </FormField>

          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" color="brand" />
          </Box>
        </Form>
      </Box>
    );
  }
}
