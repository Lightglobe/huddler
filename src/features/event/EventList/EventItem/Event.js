import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Anchor,
  Avatar,
  Box,
  Text,
  Button,
} from "grommet";
import { Clock, Location } from "grommet-icons";

export default class Event extends Component {
  render() {
    return (
      <Card width="large" background="darkTwo" elevation="none" margin="small">
        <CardHeader pad="medium">
          <Box direction="row" align="center">
            <Avatar
              src="http://placeimg.com/640/480/people"
              size="large"
              round="small"
            />
            <Box direction="column" pad={{ left: "medium" }}>
              <Text weight="bold" size="large" margin={{ bottom: "xsmall" }}>
                Night by Sky
              </Text>
              <Text size="medium">
                Posted by <Anchor color="brand" label="Alex" href="#" />
              </Text>
            </Box>
          </Box>
        </CardHeader>
        <CardBody>
          <Box
            height="xxsmall"
            pad={{
              left: "medium",
              right: "medium",
              bottom: "bottom",
            }}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
          <Box pad="medium" direction="row" background="darkThree" gap="medium">
            <Box align="center" direction="row" gap="small">
              <Avatar size="medium" src="http://placeimg.com/640/480/people" />
              <Avatar size="medium" src="http://placeimg.com/640/480/people" />
              <Avatar size="medium" src="http://placeimg.com/640/480/people" />
            </Box>
          </Box>
        </CardBody>
        <CardFooter pad="medium" background="darkTwo">
          <Box direction="row" align="center" gap="medium">
            <Box direction="row" gap="xxsmall">
              <Clock /> <Text>1:00 PM, Today</Text>
            </Box>
            <Box direction="row" gap="xxsmall">
              <Location /> <Text>London, UK</Text>
            </Box>
          </Box>
          <Button color="brand" label="View" />
        </CardFooter>
      </Card>
    );
  }
}
