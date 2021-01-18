import React, { Component } from "react";
import { Box } from "grommet";
import EventActivity from "./EventActivity";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import EventForm from "../EventForm/EventForm";
import { loadEvents } from "../eventActions";
import LoadingComponent from "../../../app/common/Loader/LoadingComponent";
const mapStateToProps = (state) => ({
  events: state.events,
  loading: state.async.loading,
});

const actions = {
  loadEvents,
};

class EventDashboard extends Component {
  render() {
    const { events, loading } = this.props;

    return (
      <Box direction="row" background="darkOne">
        <Box
          flex
          align="center"
          justify="center"
          pad={{ bottom: "large" }}
          style={{ paddingTop: "90px" }}
        >
          {loading ? (
            <LoadingComponent />
          ) : (
            <Box direction="column">
              {events.length > 0 && <EventList events={events} />}
            </Box>
          )}
        </Box>
        <EventActivity
          size={this.props.size}
          showSidebar={this.props.showSidebar}
          setShowSidebar={(this.props.setShowSidebar, (<EventForm />))}
          content={this.props.sidebar}
        />
      </Box>
    );
  }
}

export default connect(mapStateToProps, { actions })(EventDashboard);
