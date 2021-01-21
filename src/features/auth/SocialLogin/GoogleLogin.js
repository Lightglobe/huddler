import React from "react";
import { Box, Button } from "grommet";
import { Google } from "grommet-icons";

const GoogleLogin = ({ socialLogin }) => {
  return (
    <Box direction="row" justify="center" margin={{ top: "20px" }}>
      <Button
        icon={<Google />}
        round="xxsmall"
        gap="small"
        primary
        label="Login with Google"
        color="light-2"
        size="medium"
        style={{ width: "400px", height: "40px" }}
        onClick={() => socialLogin("google")}
      />
    </Box>
  );
};

export default GoogleLogin;
