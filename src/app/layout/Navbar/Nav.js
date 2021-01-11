import React, { Component } from "react";
import { Box } from "grommet";

export default class Nav extends Component {
  render() {
    return (
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        elevation="small"
        background="darkTwo"
        pad={{ left: "xlarge", right: "small", vertical: "small" }}
        style={{ zIndex: "1", position: "fixed", width: "100%", top: "0" }}
        {...this.props}
      />
    );
  }
}
