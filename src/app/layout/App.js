import React, { Component } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";

import Navbar from "./Navbar/Navbar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
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
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <Navbar
                setShowSidebar={this.setShowSidebar}
                showSidebar={showSidebar}
              />
              <EventDashboard
                size={size}
                showSidebar={this.state.showSidebar}
                setShowSidebar={this.setShowSidebar}
              />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}
