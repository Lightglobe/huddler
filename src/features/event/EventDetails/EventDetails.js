import React from "react";
import { Box, Card } from "grommet";

import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsBody from "./EventDetailsBody";
import EventDetailsChat from "./EventDetailsChat";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EventActivity from "../EventDashboard/EventActivity";
import EventForm from "../EventForm/EventForm";
import { deleteEvent } from "../eventActions";

const mapStateToPros = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.firestore.ordered.events.length > 0) {
    event = state.firestore.ordered.events.filter(
      (event) => event.id === eventId
    )[0];
  }

  return {
    event,
  };
};

const actions = {
  deleteEvent,
};

const EventDetails = ({
  event,
  size,
  showSidebar,
  sidebar,
  setShowSidebar,
  deleteEvent,
}) => {
  return (
    <Box direction="row" background="darkOne">
      <Box
        direction="row"
        justify="center"
        pad={{ bottom: "large" }}
        margin={{ top: "100px" }}
        flex
      >
        {event && (
          <Box style={{ width: "850px" }}>
            <Card elevation="none" background="darkTwo">
              <EventDetailsHeader
                title={event.title}
                id={event.id}
                category={event.category}
                hostedBy={event.hostedBy}
                hostPhotoURL={event.hostPhotoURL}
                setShowSidebar={setShowSidebar}
                showSidebar={showSidebar}
                size={size}
                deleteEvent={deleteEvent}
              />
              <EventDetailsBody
                date={new Date(event.date.seconds * 1000)}
                location={event.location}
                description={event.description}
                attendees={event.attendees}
              />
              <hr color="#232334" style={{ width: "100%", height: "2px" }} />
              <EventDetailsChat />
            </Card>
          </Box>
        )}
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

export default withRouter(connect(mapStateToPros, actions)(EventDetails));
