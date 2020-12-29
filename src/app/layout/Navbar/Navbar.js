import React, { Component } from "react";
import Nav from "./Nav";
import { Notification } from "grommet-icons";
import { Heading, Box, Button } from "grommet";
import { withRouter } from "react-router-dom";
import SignedIn from "./Menu/SignedIn";
import SignedOut from "./Menu/SignedOut";
class Navbar extends Component {
  state = {
    authenticated: true,
  };

  handleSignin = () => this.setState({ authenticated: true });
  handleSignout = () => this.setState({ authenticated: false });
  setShowSidebar = (show) => this.props.setShowSidebar(show);

  render() {
    const { authenticated } = this.state;
    return (
      <Nav>
        <Heading color="brand" level="3" margin="none">
          Huddler
        </Heading>
        <Box direction="row" gap="small" align="center">
          <Button
            icon={<Notification />}
            onClick={() => this.setShowSidebar(!this.props.showSidebar)}
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
