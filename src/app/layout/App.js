import React, { Component } from "react";
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  InfiniteScroll,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";
import Event from "../../Dashboard/Event";
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

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="darkTwo"
    pad={{ left: "xlarge", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1", position: "fixed", width: "100%", top: "0" }}
    {...props}
  />
);

const events = Array(10).fill();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  render() {
    const setShowSidebar = (show) => this.setState({ showSidebar: show });
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppBar>
                <Heading color="brand" level="3" margin="none">
                  Huddler
                </Heading>
                <Box direction="row" gap="medium" align="center">
                  <Anchor href="#" color="white" label="Settings" />
                  <Anchor href="#" color="white" label="Profile" />
                  <Button
                    icon={<Notification />}
                    onClick={() => setShowSidebar(!showSidebar)}
                  />
                  <Avatar
                    src="http://placeimg.com/640/480/people"
                    border={{ color: "white", size: "small" }}
                    size="medium"
                  />
                </Box>
              </AppBar>
              <Box direction="row" background="darkOne" full>
                <Box
                  flex
                  align="center"
                  justify="center"
                  overflow="auto"
                  margin={{ top: "large" }}
                  pad={{ top: "xlarge", bottom: "large" }}
                >
                  <InfiniteScroll items={events}>
                    {(event) => <Event key={event} />}
                  </InfiniteScroll>
                </Box>
                {!showSidebar || size !== "small" ? (
                  <Collapsible
                    direction="horizontal"
                    open={showSidebar}
                    style={{
                      height: "100vh",
                    }}
                  >
                    <Box
                      width="medium"
                      background="darkTwo"
                      align="center"
                      justify="center"
                      style={{
                        height: "100vh",
                        position: "sticky",
                        top: "0",
                      }}
                    >
                      Sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="darkTwo"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      Sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}
