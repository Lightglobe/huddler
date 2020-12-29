import React from "react";
import { Grid, Box, Main } from "grommet";
import LoginForm from "../user/LoginForm/LoginForm";
const Home = () => {
  return (
    <Box background="darkOne" style={{ height: "100vh" }}>
      <Box direction="row-responsive">
        <Box style={{ width: "50%" }} margin={{ top: "100px" }} align="center">
          <img src="/assets/team_login.svg" style={{ width: "85%" }} />
        </Box>
        <Box style={{ width: "50%" }} align="center">
          <Box
            width="500px"
            margin={{ top: "190px" }}
            round="small"
            background="darkTwo"
          >
            <Box pad="large">
              <LoginForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
