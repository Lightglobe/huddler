import React, { Component } from "react";
import { InfiniteScroll, Box } from "grommet";
import Event from "../EventList/EventItem/Event";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <InfiniteScroll items={events}>
        {(event) => <Event key={event.id} event={event} />}
      </InfiniteScroll>
    );
  }
}
