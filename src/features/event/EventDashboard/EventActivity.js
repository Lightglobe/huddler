import React, { Component } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

export default class EventActivity extends Component {
  render() {
    const element = React.cloneElement(this.props.content, {
      createEvent: this.props.createEvent,
    });

    return (
      <React.Fragment>
        {!this.props.showSidebar || this.props.size !== "small" ? (
          <Collapsible direction="horizontal" open={this.props.showSidebar}>
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
                direction="column"
                margin={{ bottom: "medium" }}
                align="center"
                fill="vertical"
              >
                {element}
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
                  this.props.setShowSidebar(!this.props.showSidebar, "")
                }
              />
            </Box>
            <Box fill background="darkOne" align="center" justify="center">
              {element}
            </Box>
          </Layer>
        )}
      </React.Fragment>
    );
  }
}
