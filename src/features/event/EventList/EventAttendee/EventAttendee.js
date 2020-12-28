import React, { Component } from "react";
import { Anchor, Avatar, Box, Tip } from "grommet";

export default class EventAttendee extends Component {
  render() {
    return (
      <Tip
        plain
        content={
          <Box
            pad="small"
            gap="small"
            margin={{ top: "xsmall" }}
            width={{ max: "small" }}
            round="small"
            background="darkOne"
            responsive={false}
          >
            {this.props.name}
          </Box>
        }
      >
        <Anchor href={this.props.id}>
          <Avatar size="medium" src={this.props.photoURL} />
        </Anchor>
      </Tip>
    );
  }
}
