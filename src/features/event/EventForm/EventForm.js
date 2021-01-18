import React, { Component } from "react";
import { Form, Box, Button, Text } from "grommet";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

import renderInputFormField from "../../../app/common/FormFields/renderInputFormField";
import renderInputSuggestionFormField from "../../../app/common/FormFields/renderInputSuggestionFormField";
import renderSelectFormField from "../../../app/common/FormFields/renderSelectFormField";
import renderDateInputField from "../../../app/common/FormFields/renderDateInputField";
import renderMaskedInputField from "../../../app/common/FormFields/renderMaskedInputField";
import renderTextAreaField from "../../../app/common/FormFields/renderTextAreaField";
import { reduxForm, Field } from "redux-form";

import { parse } from "date-fns";
import cuid from "cuid";
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const defaultValue = {
  title: "",
  description: "",
  category: "",
  location: "",
  venue: "",
  date: "",
  time: "",
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = defaultValue;
  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  return {
    event,
  };
};

const actions = {
  createEvent,
  updateEvent,
};

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "title",
    "category",
    "location",
    "venue",
    "date",
    "time",
    "description",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (values.title && values.title.length > 50)
    errors.title = "No more than 50 characters";
  if (values["description"] && values["description"].length > 400) {
    errors.category = "No more than 400 characters";
  }
  return errors;
};

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.event,
      geocoder: null,
      suggestionList: Array(0).fill("", 0, 0, ""),
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    this.fetchSuggestions = this.fetchSuggestions.bind(this);
  }

  setValue = (value) => this.setState({ value: value });

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.value.id) {
      this.props.updateEvent(this.state.value);
    } else {
      const newEvent = {
        ...this.state.value,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
      };
      this.props.createEvent(newEvent);
    }
  }

  componentDidMount() {
    const options = {
      accessToken: process.env.REACT_APP_MAPGL_TOKEN,
      types: "address",
      localGeocoder: this.forwardGeocoder,
    };
    const geocodingClient = mbxGeocoding(options);
    this.setState({ geocoder: geocodingClient });
  }

  fetchSuggestions() {
    console.log(this.state.value.location);
    let queryString = this.state.value.location.toString();
    this.state.geocoder
      .forwardGeocode({
        query: queryString,
        limit: 2,
      })
      .send()
      .then((response) => {
        const match = response.body;
        this.setState({ suggestionList: match.features });
      })
      .catch((error) => {});
  }

  renderSuggestions() {
    return this.state.suggestionList.map(
      ({ place_name, center }, index, list) => ({
        label: place_name,
        center: center,
        feature: list[index],
      })
    );
  }

  render() {
    const { submitting, error } = this.props;
    return (
      <Box margin="auto" pad={{ top: "70px" }}>
        <Text
          size="large"
          weight="bold"
          margin={{ bottom: "small" }}
          alignSelf="start"
        >
          Create event
        </Text>
        <Form
          validate="submit"
          value={this.state.value}
          onChange={(nextValue, { touched }) => {
            // console.log("Change", nextValue, touched);
            this.setValue(nextValue);
          }}
          onReset={() => {
            this.setValue(defaultValue);
          }}
          onSubmit={(event) => {
            //console.log("Submit", event.value, event.touched);
            const date = parse(
              event.value.time,
              "h:mm aa",
              new Date(event.value.date)
            );
            event.value.date = new Date(date);

            this.handleFormSubmit(event);
          }}
        >
          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderInputFormField}
              placeholder="Title"
              value={this.state.title}
              name="title"
            />
          </Box>

          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderSelectFormField}
              value={this.state.category}
              name="category"
              options={["Drinks", "Food", "Culture"]}
              placeholder="Category"
            />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderInputSuggestionFormField}
              placeholder="Location"
              fetch={this.fetchSuggestions}
              suggestions={this.renderSuggestions()}
              value={this.state.location}
              name="location"
            />
          </Box>

          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderInputFormField}
              placeholder="Venue"
              value={this.state.venue}
              name="venue"
            />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderDateInputField}
              value={this.state.date}
              name="date"
            />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderMaskedInputField}
              value={this.state.time}
              name="time"
            />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <Field
              component={renderTextAreaField}
              placeholder="Description"
              rows="5"
              resize={false}
              value={this.state.description}
              name="description"
            />
          </Box>

          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Submit"
              color="brand"
              disabled={error || submitting}
            />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default withRouter(
  reduxForm({ form: "eventForm", validate })(
    connect(mapStateToProps, actions)(EventForm)
  )
);
