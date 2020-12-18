import React, { useState } from "react";
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapsible,
  Stack,
  Text,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#3D4C5A",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "xlarge", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Huddler
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box
              direction="row"
              flex
              overflow={{ horizontal: "hidden", vertical: "hidden" }}
            >
              <Box flex align="center" justify="center">
                <Card width="large" background="light-1">
                  <CardHeader pad="medium">
                    <Box direction="row" align="center">
                      <Avatar
                        src="http://placeimg.com/640/480/people"
                        size="large"
                        round="small"
                      />
                      <Box direction="column" pad={{ left: "medium" }}>
                        <Text
                          weight="bold"
                          size="xlarge"
                          margin={{ bottom: "small" }}
                        >
                          Night by Sky
                        </Text>
                        <Text size="medium">
                          Posted by <Anchor label="Alex" href="#" />
                        </Text>
                      </Box>
                    </Box>
                  </CardHeader>
                  <CardBody>
                    <Box
                      pad="medium"
                      direction="row"
                      background="light-2"
                      gap="medium"
                    >
                      <Stack anchor="right">
                        <Avatar
                          size="medium"
                          src="http://placeimg.com/640/480/people"
                        />
                        <Avatar
                          size="medium"
                          src="http://placeimg.com/640/480/people"
                        />
                        <Avatar
                          size="medium"
                          src="http://placeimg.com/640/480/people"
                        />
                      </Stack>
                    </Box>
                  </CardBody>
                  <CardFooter pad="large" background="light-2">
                    <Button primary color="red" label="View" />
                  </CardFooter>
                </Card>
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    Sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    Sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
