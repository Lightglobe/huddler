import React, { Component } from "react";
import { Box } from "grommet";
import EventActivity from "./EventActivity";
import EventList from "../EventList/EventList";

const eventsData = [
  {
    id: "1",
    title: "Trip to Limassol",
    date: "2021-01-23T10:00:00+00:00",
    category: "Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    city: "Limassol, Cyprus",
    venue: "My Mall of Limassol",
    hostedBy: "Bob",
    hostPhotoURL: "http://placeimg.com/640/480/people",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "http://placeimg.com/640/480/people",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "http://placeimg.com/640/480/people",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Troodos",
    date: "2021-01-02T10:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    city: "Troodos, Limassol, Cyprus",
    venue: "Chionistra Restaurant",
    hostedBy: "Tom",
    hostPhotoURL: "http://placeimg.com/640/480/people",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "http://placeimg.com/640/480/people",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "http://placeimg.com/640/480/people",
      },
    ],
  },
];

export default class EventDashboard extends Component {
  state = {
    events: eventsData,
  };

  render() {
    const { events } = this.state;

    return (
      <Box direction="row" background="darkOne" full>
        <Box
          flex
          align="center"
          justify="center"
          overflow="auto"
          pad={{ top: "xlarge", bottom: "large" }}
        >
          <EventList events={events} />
        </Box>
        <EventActivity
          size={this.props.size}
          showSidebar={this.props.showSidebar}
          setShowSidebar={this.props.setShowSidebar}
        />
      </Box>
    );
  }
}
