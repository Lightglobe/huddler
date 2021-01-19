import React, { Component } from "react";
import Nav from "./Nav";
import { Notification, ScheduleNew } from "grommet-icons";
import { Heading, Box, Button, Anchor, Text } from "grommet";
import { withRouter, NavLink } from "react-router-dom";
import SignedIn from "./Menu/SignedIn";
import "./Navbar.css";
import { openModal } from "../../../features/modals/modalActions";
import { connect } from "react-redux";
import { login, logout } from "../../../features/auth/authActions";

const actions = {
  openModal,
  login,
  logout,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

class Navbar extends Component {
  handleSignin = () => login();
  handleSignout = () => this.setState({ authenticated: false });
  setShowSidebar = (show, component) =>
    this.props.setShowSidebar(show, component);

  render() {
    const { openModal, authenticated, logout, login } = this.props;
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
        {authenticated ? (
          <Box direction="row" gap="small" align="center">
            <Anchor
              className="link__text"
              onClick={() => openModal("EventFormModal")}
            >
              <div className="border__gradient button">
                <ScheduleNew className="icon" />
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  New Event
                </Text>
              </div>
            </Anchor>
            <NavLink to="/test">Test</NavLink>

            <Button
              icon={<Notification />}
              onClick={() =>
                this.setShowSidebar(
                  !this.props.showSidebar,
                  <h1>Notification</h1>
                )
              }
            />

            <SignedIn logout setShowSidebar={this.setShowSidebar} />
          </Box>
        ) : null}
      </Nav>
    );
  }
}

export default withRouter(connect(mapStateToProps, actions)(Navbar));
