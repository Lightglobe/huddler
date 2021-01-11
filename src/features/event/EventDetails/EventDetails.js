import React from "react";
import { Box, Card, Text, Avatar } from "grommet";

import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsBody from "./EventDetailsBody";
import EventDetailsChat from "./EventDetailsChat";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EventActivity from "../EventDashboard/EventActivity";
import EventForm from "../EventForm/EventForm";

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

const EventDetails = ({
  event,
  size,
  showSidebar,
  sidebar,
  setShowSidebar,
}) => {
  return (
    <Box direction="row" background="darkOne">
      <Box
        direction="row"
        flex
        justify="center"
        pad={{ bottom: "large" }}
        margin={{ top: "100px" }}
      >
        <Box style={{ width: "850px" }}>
          <Card elevation="none" background="darkTwo">
            <EventDetailsHeader
              title={event.title}
              category={event.category}
              hostedBy={event.hostedBy}
              hostPhotoURL={event.hostPhotoURL}
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
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
      <EventActivity
        size={size}
        showSidebar={showSidebar}
        setShowSidebar={(setShowSidebar, (<EventForm />))}
        content={sidebar}
      />
    </Box>
  );
};

export default withRouter(connect(mapStateToPros)(EventDetails));
