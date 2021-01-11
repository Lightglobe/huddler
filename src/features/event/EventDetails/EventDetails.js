import React from "react";
import { Box, Card, Text, Avatar } from "grommet";

import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsBody from "./EventDetailsBody";
import EventDetailsChat from "./EventDetailsChat";
import { connect } from "react-redux";
import { withRouter } from "react-router";
const mapStateToPros = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    event,
  };
};

const EventDetails = ({ event }) => {
  return (
    <Box background="darkOne">
      <Box
        direction="row"
        margin={{ top: "100px", left: "100px", right: "100px" }}
      >
        <Box style={{ width: "850px", margin: "auto" }}>
          <Card elevation="none" background="darkTwo">
            <EventDetailsHeader
              title={event.title}
              category={event.category}
              hostedBy={event.hostedBy}
              hostPhotoURL={event.hostPhotoURL}
            />
            <EventDetailsBody
              date={event.date}
              location={event.venue + ", " + event.city}
              description={event.description}
              attendees={event.attendees}
            />
            <hr color="#232334" style={{ width: "100%", height: "2px" }} />
            <EventDetailsChat />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(connect(mapStateToPros)(EventDetails));
