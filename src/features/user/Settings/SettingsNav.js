import React from "react";
import { Box, Text } from "grommet";
import { User, UserSettings } from "grommet-icons";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <>
      <Box
        direction="column"
        round="small"
        pad="medium"
        background="darkTwo"
        style={{ maxWidth: "250px" }}
      >
        <Box
          width="100%"
          direction="row"
          align="center"
          margin={{ bottom: "10px" }}
        >
          <User style={{ height: "20px" }} />
          <Text weight="bold" size="large" margin={{ left: "10px" }}>
            Profile
          </Text>
        </Box>
        <hr style={{ width: "100%" }} />
        <Box margin={{ bottom: "15px", top: "15px" }}>
          <NavLink to="/settings/basic" style={{ textDecoration: "none" }}>
            {" "}
            <Text size="medium" style={{ textDecoration: "none" }}>
              Basic Page
            </Text>{" "}
          </NavLink>
        </Box>
        <Box margin={{ bottom: "15px", top: "15px" }}>
          <NavLink to="/settings/about" style={{ textDecoration: "none" }}>
            {" "}
            <Text size="medium" style={{ textDecoration: "none" }}>
              About Page
            </Text>{" "}
          </NavLink>
        </Box>
        <Box margin={{ bottom: "15px", top: "15px" }}>
          <NavLink to="/settings/photos" style={{ textDecoration: "none" }}>
            {" "}
            <Text size="medium" style={{ textDecoration: "none" }}>
              Photos Page
            </Text>{" "}
          </NavLink>
        </Box>
      </Box>
      <Box
        direction="column"
        round="small"
        pad="medium"
        background="darkTwo"
        style={{ maxWidth: "250px", marginTop: "50px" }}
      >
        <Box
          width="100%"
          direction="row"
          align="center"
          margin={{ bottom: "10px" }}
        >
          <UserSettings style={{ height: "20px" }} />
          <Text weight="bold" size="large" margin={{ left: "10px" }}>
            Account
          </Text>
        </Box>
        <hr style={{ width: "100%" }} />
        <Box margin={{ bottom: "15px", top: "15px" }}>
          {" "}
          <NavLink to="/settings/account" style={{ textDecoration: "none" }}>
            {" "}
            <Text size="medium" style={{ textDecoration: "none" }}>
              My Account
            </Text>{" "}
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default SettingsNav;
