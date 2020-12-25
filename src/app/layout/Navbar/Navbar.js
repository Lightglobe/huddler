import React, { Component } from "react";
import Nav from "./Nav";
import { Notification } from "grommet-icons";
import { Heading, Box, Anchor, Avatar, Button } from "grommet";

export default class Navbar extends Component {
  setShowSidebar = (show) => this.props.setShowSidebar(show);
  render() {
    return (
      <Nav>
        <Heading color="brand" level="3" margin="none">
          Huddler
        </Heading>
        <Box direction="row" gap="medium" align="center">
          <Anchor href="#" color="white" label="Settings" />
          <Anchor href="#" color="white" label="Profile" />
          <Button
            icon={<Notification />}
            onClick={() => this.setShowSidebar(!this.props.showSidebar)}
          />
          <Avatar
            src="http://placeimg.com/640/480/people"
            border={{ color: "white", size: "small" }}
            size="medium"
          />
        </Box>
      </Nav>
    );
  }
}
