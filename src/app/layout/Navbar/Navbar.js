import React, { Component } from "react";
import Nav from "./Nav";
import { Notification, ScheduleNew } from "grommet-icons";
import { Heading, Box, Button, Anchor, Text } from "grommet";
import { withRouter, Switch } from "react-router-dom";
import SignedIn from "./Menu/SignedIn";
import SignedOut from "./Menu/SignedOut";
import EventForm from "../../../features/event/EventForm/EventForm";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    authenticated: true,
  };

  handleSignin = () => this.setState({ authenticated: true });
  handleSignout = () => this.setState({ authenticated: false });
  setShowSidebar = (show, component) =>
    this.props.setShowSidebar(show, component);

  render() {
    const { authenticated } = this.state;
    return (
      <Nav>
        <Heading
          color="brand"
          level="3"
          margin="none"
          className="text__gradient"
        >
          Huddler
        </Heading>

        <Box direction="row" gap="small" align="center">
          <Anchor
            className="link__text"
            onClick={() =>
              this.setShowSidebar(!this.props.showSidebar, <EventForm />)
            }
          >
            <div className="border__gradient button">
              <ScheduleNew className="icon" />
              <Text size="small" margin={{ left: "5px" }} weight="bold">
                New Event
              </Text>
            </div>
          </Anchor>

          <Button
            icon={<Notification />}
            onClick={() =>
              this.setShowSidebar(
                !this.props.showSidebar,
                <h1>Notification</h1>
              )
            }
          />
          {authenticated ? (
            <SignedIn signOut={this.handleSignout} />
          ) : (
            <SignedOut signIn={this.handleSignin} />
          )}
        </Box>
      </Nav>
    );
  }
}

export default withRouter(Navbar);
