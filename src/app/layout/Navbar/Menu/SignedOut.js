import React from "react";
import { Box, Anchor } from "grommet";
const SignedOut = ({ signIn }) => {
  return (
    <Box direction="row" gap="small">
      <Anchor href="#" onClick={() => signIn()} color="white">
        Signin
      </Anchor>
      <Anchor href="#" color="white">
        Register
      </Anchor>
    </Box>
  );
};

export default SignedOut;
