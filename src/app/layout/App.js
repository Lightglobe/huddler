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
import "./App.css";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";
const theme = {
  global: {
    colors: {
      brand: "#9D1F76",
      darkOne: "#1D1C2A",
      darkTwo: "#222232",
      darkThree: "#232334",
      focus: "#232323",
    },
    font: {
      family: "Ubuntu",
      size: "16px",
      height: "18px",
    },
    drop: {
      shadowSize: {
        small: "0px",
        medium: "0px",
        large: "0px",
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
    touched: {
      background: {
        color: "white",
      },
    },
    error: {
      background: {
        color: "status-critical",
        opacity: "weak",
      },
    },
    margin: "none",
    border: {
      side: "none",
      position: "none",
    },
  },
  collapsible: {
    extend: {
      height: "100vh",
      position: "sticky",
      top: "0",
    },
    baseline: "100vh",
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      sidebar: "",
    };
    this.setShowSidebar = this.setShowSidebar.bind(this);
  }

  setShowSidebar = (show, component) => {
    this.setState({ showSidebar: show, sidebar: component });
  };

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
              <Box
                style={{ minHeight: "100vh" }}
                background="darkOne"
                elevation="none"
              >
                <ModalManager>
                  <Route exact path="/">
                    <Home size={size} />
                  </Route>
                  <Route
                    path="/(.+)"
                    render={() => (
                      <>
                        <Route exact path="/events">
                          <EventDashboard
                            size={size}
                            showSidebar={this.state.showSidebar}
                            setShowSidebar={this.setShowSidebar}
                            sidebar={this.state.sidebar}
                          />
                        </Route>

                        <Route exact path="/events/:id">
                          <EventDetails
                            size={size}
                            showSidebar={this.state.showSidebar}
                            setShowSidebar={this.setShowSidebar}
                            sidebar={this.state.sidebar}
                          />
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
                        <Route path="/test">
                          <TestComponent />
                        </Route>
                      </>
                    )}
                  />
                </ModalManager>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}
