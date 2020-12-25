import React, { Component } from "react";
import { Box } from "grommet";
import EventActivity from "./EventActivity";
import EventList from "../EventList/EventList";

export default class EventDashboard extends Component {
  render() {
    return (
      <Box direction="row" background="darkOne" full>
        <Box
          flex
          align="center"
          justify="center"
          overflow="auto"
          pad={{ top: "xlarge", bottom: "large" }}
        >
          <EventList />
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
