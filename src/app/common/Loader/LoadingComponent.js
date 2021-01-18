import React from "react";
import { Spinning } from "grommet-controls";
import { Box } from "grommet";
const LoadingComponent = () => {
  return (
    <Box margin={{ top: "50px" }}>
      <Spinning kind="chasing-dots" size="large" color="brand" />
    </Box>
  );
};

export default LoadingComponent;
