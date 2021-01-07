import React from "react";
import { Box } from "grommet";
import { Route, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import SettingsNav from "./SettingsNav";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { Switch } from "react-router-dom";
const SettingsDashboard = () => {
  return (
    <Box direction="row-responsive" height="100vh" background="darkOne">
      <Box margin={{ top: "100px", left: "100px" }} width="70%">
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Box>
      <Box width="30%" margin={{ top: "100px" }}>
        <SettingsNav />
      </Box>
    </Box>
  );
};

export default SettingsDashboard;
