import React from "react";
import { Box } from "grommet";

import LoginForm from "../user/LoginForm/LoginForm";
const Home = ({ size }) => {
  return (
    <Box background="darkOne" style={{ height: "100vh" }}>
      <Box direction="row">
        <Box style={{ width: "50%" }} align="center" margin="auto">
          <Box
            style={{ minWidth: "450px" }}
            margin={{ top: "100px" }}
            round="small"
            background="darkTwo"
          >
            <Box pad="large">
              <LoginForm />
            </Box>
          </Box>
        </Box>
        {size !== "small" && (
          <Box align="center" style={{ width: "50%" }} margin={{ top: "80px" }}>
            <img
              src="/assets/vector-creator.svg"
              style={{ width: "100%" }}
              alt="hero"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
