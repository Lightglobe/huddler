import React from "react";
import { Box, Text, Avatar, Menu } from "grommet";
import { withRouter } from "react-router-dom";
import {
  FormDown,
  Plan,
  Group,
  User,
  SettingsOption,
  Logout,
} from "grommet-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  currentUser: state.auth.currentUser,
});

const actions = {};

class SignedIn extends React.Component {
  render() {
    const { history, setShowSidebar, signout, auth } = this.props;
    return (
      <Menu
        dropBackground="darkThree"
        items={[
          {
            label: <Box alignSelf="center">My Events</Box>,
            onClick: () => {
              setShowSidebar(false, "");
              return history.push("/events");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Plan size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">My Network</Box>,
            onClick: () => {
              return history.push("/people");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Group size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">My Profile</Box>,
            onClick: () => {
              return history.push("/people");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <User size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">Settings</Box>,
            onClick: () => {
              return history.push("/settings");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <SettingsOption size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">Logout</Box>,
            onClick: () => {
              signout();
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Logout size="medium" />
              </Box>
            ),
          },
        ]}
      >
        <Box direction="row" gap="small" pad="small">
          <Avatar
            src={auth.photoURL || "/assets/user.png"}
            border={{ color: "white", size: "small" }}
            size="small"
          />
          <Text>{auth.displayName}</Text>
          <FormDown />
        </Box>
      </Menu>
    );
  }
}

export default withRouter(connect(mapStateToProps, actions)(SignedIn));
