import React, { Component } from "react";
import {
  Form,
  Box,
  Button,
  Text,
  TextInput,
  Select,
  TextArea,
  DateInput,
  MaskedInput,
} from "grommet";
import { withRouter } from "react-router";
import { parse } from "date-fns";
import { Clock } from "grommet-icons";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const defaultValue = {
  title: "",
  description: "",
  category: "",
  city: "",
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

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.event };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue = (value) => this.setState({ value: value });

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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

  render() {
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
            event.value.date = date.toUTCString();
            this.handleFormSubmit(event);
          }}
        >
          <Box margin={{ bottom: "small" }}>
            <TextInput name="title" placeholder="Title" />
          </Box>

          <Box margin={{ bottom: "small" }}>
            <Select
              value={this.state.category}
              name="category"
              options={["drinks", "food", "culture"]}
              placeholder="Category"
            />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <TextInput name="city" placeholder="City" />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <TextInput name="venue" placeholder="Venue" />
          </Box>
          <Box margin={{ bottom: "small" }}>
            <DateInput name="date" format="dd/mm/yyyy" />
          </Box>
          <Box
            direction="row"
            border
            round="xxsmall"
            align="center"
            margin={{ bottom: "small" }}
          >
            <MaskedInput
              plain
              mask={[
                {
                  length: [1, 2],
                  options: Array.from({ length: 12 }, (v, k) => k + 1),
                  regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                  placeholder: "hh",
                },
                { fixed: ":" },
                {
                  length: 2,
                  options: ["00", "15", "30", "45"],
                  regexp: /^[0-5][0-9]$|^[0-9]$/,
                  placeholder: "mm",
                },
                { fixed: " " },
                {
                  length: 2,
                  options: ["a.m.", "p.m."],
                  regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                  placeholder: "ap",
                },
              ]}
              name="time"
            />
            <Box pad={{ right: "15px" }}>
              <Clock />
            </Box>
          </Box>
          <Box margin={{ bottom: "small" }}>
            <TextArea
              rows="5"
              resize={false}
              name="description"
              placeholder="Description"
            />
          </Box>
          <Box direction="row" justify="end" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" color="brand" />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default withRouter(connect(mapStateToProps, actions)(EventForm));
