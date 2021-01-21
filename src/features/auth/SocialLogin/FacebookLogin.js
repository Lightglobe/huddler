import React from "react";
import { Box, Button } from "grommet";
import { Facebook } from "grommet-icons";
import { socialLogin } from "../authActions";

const FacebookLogin = ({ socialLogin }) => {
  return (
    <Box direction="row" justify="center" margin={{ top: "20px" }}>
      <Button
        icon={<Facebook />}
        round="xxsmall"
        gap="small"
        primary
        label="Login with Facebook"
        color="light-2"
        size="medium"
        style={{ width: "400px", height: "40px" }}
        onClick={() => socialLogin("facebook")}
      />
    </Box>
  );
};

export default FacebookLogin;
