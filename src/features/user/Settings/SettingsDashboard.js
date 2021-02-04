import React from "react";
import { Box } from "grommet";
import { Route, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import SettingsNav from "./SettingsNav";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { socialLogin, updatePassword } from "../../auth/authActions";
import { updateProfile } from "../userActions";

const mapStateToProps = (state) => ({
  providerId:
    state.firebase.auth.isLoaded &&
    state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile.isLoaded && state.firebase.profile,
});

const actions = {
  updatePassword,
  socialLogin,
  updateProfile,
};
const SettingsDashboard = ({
  updateProfile,
  updatePassword,
  socialLogin,
  providerId,
  user,
}) => {
  return (
    <Box
      direction="row-responsive"
      style={{ minHeight: "100vh" }}
      background="darkOne"
    >
      <Box margin={{ top: "100px", left: "100px" }} width="70%">
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route
            path="/settings/basic"
            render={() => (
              <BasicPage user={user} updateProfile={updateProfile} />
            )}
          />
          <Route
            path="/settings/about"
            render={() => (
              <AboutPage user={user} updateProfile={updateProfile} />
            )}
          />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                socialLogin={socialLogin}
                providerId={providerId}
                updatePassword={updatePassword}
              />
            )}
          />
        </Switch>
      </Box>
      <Box width="30%" margin={{ top: "100px" }}>
        <SettingsNav />
      </Box>
    </Box>
  );
};

export default connect(mapStateToProps, actions)(SettingsDashboard);
