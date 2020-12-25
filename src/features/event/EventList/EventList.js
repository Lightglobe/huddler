import React, { Component } from "react";
import { InfiniteScroll } from "grommet";
import Event from "../EventList/EventItem/Event";

export default class EventList extends Component {
  render() {
    const events = Array(10).fill();
    return (
      <InfiniteScroll items={events}>
        {(event) => <Event key={event} />}
      </InfiniteScroll>
    );
  }
}
