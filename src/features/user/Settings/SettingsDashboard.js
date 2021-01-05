import React from "react";
import { Box, Heading } from "grommet";
const SettingsDashboard = () => {
  return (
    <Box direction="row" height="100vh" background="darkOne">
      <Box></Box>
      <Box>
        <Box
          direction="column"
          round="small"
          pad="medium"
          margin={{ top: "100px" }}
          background="darkTwo"
        >
          <Heading level="4">User Settings</Heading>
          <Box pad="small"> Basic Page</Box>
          <Box pad="small">Account Page</Box>
          <Box pad="small">Photos Page</Box>
          <Box pad="small">Settings Page</Box>
          <Box pad="small">Settings Nav</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsDashboard;
