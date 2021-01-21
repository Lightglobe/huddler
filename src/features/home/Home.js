import React, { useState } from "react";
import { Box } from "grommet";

import LoginForm from "../auth/LoginForm/LoginForm";
import RegisterForm from "../auth/RegisterForm/RegisterForm";

const Home = ({ size }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Box background="darkOne" style={{ height: "100vh" }}>
      <Box direction="row">
        <Box style={{ width: "50%" }} align="center" margin="auto">
          <Box
            style={{ minWidth: "450px" }}
            margin={{ top: "140px" }}
            round="small"
            background="darkTwo"
          >
            <Box pad="large">
              {showRegister ? (
                <RegisterForm setShowRegister={setShowRegister} />
              ) : (
                <LoginForm setShowRegister={setShowRegister} />
              )}
            </Box>
          </Box>
        </Box>
        {size !== "small" && (
          <Box
            align="center"
            style={{ width: "50%" }}
            margin={{ top: "140px", right: "100px" }}
          >
            <img
              src="/assets/home/outer_space_team.svg"
              style={{ width: "80%" }}
              alt="hero"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
