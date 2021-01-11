import React, { Component } from "react";
import { Box } from "grommet";
import EventActivity from "./EventActivity";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import { connect } from "react-redux";
import EventForm from "../EventForm/EventForm";

const mapStateToProps = (state) => ({
  events: state.events,
});

class EventDashboard extends Component {
  constructor(props) {
    super(props);

    this.handleEventCreate = this.handleEventCreate.bind(this);
  }

  handleEventCreate(newEvent) {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    console.log(newEvent);
    this.setState(({ events }) => ({
      events: [...events, newEvent],
    }));
  }
  render() {
    const { events } = this.props;

    return (
      <Box direction="row" background="darkOne">
        <Box
          flex
          align="center"
          justify="center"
          pad={{ bottom: "large" }}
          style={{ paddingTop: "90px" }}
        >
          <EventList events={events} />
        </Box>
        <EventActivity
          size={this.props.size}
          showSidebar={this.props.showSidebar}
          setShowSidebar={(this.props.setShowSidebar, (<EventForm />))}
          content={this.props.sidebar}
          createEvent={this.handleEventCreate}
        />
      </Box>
    );
  }
}

export default connect(mapStateToProps)(EventDashboard);
