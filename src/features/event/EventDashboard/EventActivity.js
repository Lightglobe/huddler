import React, { Component } from "react";
import { Box, Button, Collapsible, Layer, Text } from "grommet";
import { FormClose } from "grommet-icons";

import EventForm from "../EventForm/EventForm";
export default class EventActivity extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.showSidebar || this.props.size !== "small" ? (
          <Collapsible
            direction="horizontal"
            open={this.props.showSidebar}
            style={{
              height: "100vh",
              position: "sticky",
              top: "0",
            }}
          >
            <Box
              width="medium"
              background="darkTwo"
              style={{
                height: "100vh",
                position: "sticky",
                top: "0",
              }}
            >
              <Box
                direction="column-reverse"
                margin={{ bottom: "medium" }}
                align="center"
                fill="vertical"
              >
                {this.props.children}
              </Box>
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
                onClick={() =>
                  this.props.setShowSidebar(!this.props.showSidebar)
                }
              />
            </Box>
            <Box fill background="light-2" align="center" justify="center">
              Sidebar
            </Box>
          </Layer>
        )}
      </React.Fragment>
    );
  }
}
