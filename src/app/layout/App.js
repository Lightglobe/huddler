import React, { Component } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetails from "../../features/event/EventDetails/EventDetails";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetails from "../../features/user/UserDetails/UserDetails";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import Home from "../../features/home/Home";

const theme = {
  global: {
    colors: {
      brand: "#9D1F76",
      darkOne: "#1D1C2A",
      darkTwo: "#222232",
      darkThree: "#232334",
    },
    font: {
      family: "Ubuntu",
      size: "16px",
      height: "18px",
    },
    drop: {
      elevation: {
        none: "none",
        small: "none",
        xsmall: "none",
        medium: "none",
        large: "none",
      },
      shadowSize: {
        small: "0",
        medium: "0",
        large: "0",
      },
    },
  },
  formField: {
    label: {
      size: "16px",
      margin: "5px",
      weight: 400,
      alignSelf: "start",
    },

    disabled: {
      background: {
        color: "status-disabled",
        opacity: true,
      },
    },
    content: {
      pad: "large",
    },
    error: {
      background: {
        color: "status-critical",
        opacity: "weak",
      },
    },
    margin: "none",
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
    this.setShowSidebar = this.setShowSidebar.bind(this);
  }

  setShowSidebar = (show) => this.setState({ showSidebar: show });

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <Navbar
                setShowSidebar={this.setShowSidebar}
                showSidebar={showSidebar}
              />
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                path="/(.+)"
                render={() => (
                  <>
                    <Route path="/events">
                      <EventDashboard
                        size={size}
                        showSidebar={this.state.showSidebar}
                        setShowSidebar={this.setShowSidebar}
                      />
                    </Route>
                    <Route path="/events/:id">
                      <EventDetails />
                    </Route>
                    <Route path="/people">
                      <PeopleDashboard />
                    </Route>
                    <Route path="/profile/:id">
                      <UserDetails />
                    </Route>
                    <Route path="/settings">
                      <SettingsDashboard />
                    </Route>
                    <Route path="/createEvent">
                      <EventForm />
                    </Route>
                  </>
                )}
              />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}
