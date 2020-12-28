import React, { Component } from "react";
import { InfiniteScroll } from "grommet";
import Event from "../EventList/EventItem/Event";

export default class EventList extends Component {
  render() {
    return (
      <InfiniteScroll items={this.props.events}>
        {(event) => <Event key={event.id} event={event} />}
      </InfiniteScroll>
    );
  }
}
