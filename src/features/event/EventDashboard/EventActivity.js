import React, { Component } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

export default class EventActivity extends Component {
  render() {
    const element = React.cloneElement(this.props.content);

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
                style={{ overflow: "auto" }}
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
              <Box margin={{ top: "400px" }} margin="auto">
                {element}
              </Box>
            </Box>
          </Layer>
        )}
      </React.Fragment>
    );
  }
}
