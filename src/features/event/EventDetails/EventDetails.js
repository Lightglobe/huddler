import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Avatar,
  Button,
  Anchor,
} from "grommet";

import { CircleInformation, Calendar, Location, Sign } from "grommet-icons";

const EventDetails = () => {
  return (
    <Box background="darkOne">
      <Box
        direction="row"
        margin={{ top: "100px", left: "100px", right: "100px" }}
      >
        <Box style={{ width: "850px", margin: "auto" }}>
          <Card elevation="none" background="darkTwo">
            <Stack anchor="bottom-left">
              <CardBody>
                <Image
                  src="/assets/event-placeholder/troodos.png"
                  fit="cover"
                  alt="Scooba diving"
                  a11yTitle="scuba diving"
                  style={{ maxHeight: "400px" }}
                />
              </CardBody>
              <CardHeader
                pad={{ horizontal: "medium", vertical: "small" }}
                background="#1D1C2AA0"
                justify="between"
                width="850px"
              >
                <Box direction="row" gap="small">
                  <Avatar src="/assets/user.png" a11yTitle="avatar" />
                  <Box>
                    <Heading level="3" margin="none">
                      Trip to Troodos
                    </Heading>
                    <Text size="small">Location</Text>
                  </Box>
                </Box>
                <Box direction="row" gap="small">
                  <Anchor
                    className="link__text"
                    onClick={() => console.log("Joined event")}
                  >
                    <div
                      className="border__gradient button"
                      style={{ background: "#ff6961" }}
                    >
                      <Text size="small" margin={{ left: "5px" }} weight="bold">
                        Delete
                      </Text>
                    </div>
                  </Anchor>
                  <Anchor
                    className="link__text"
                    onClick={() => console.log("Joined event")}
                  >
                    <div
                      className="border__gradient button"
                      style={{ background: "#98e690" }}
                    >
                      <Text size="small" margin={{ left: "5px" }} weight="bold">
                        Edit
                      </Text>
                    </div>
                  </Anchor>
                  <Anchor
                    className="link__text"
                    onClick={() => console.log("Joined event")}
                  >
                    <div className="border__gradient button">
                      <Sign className="icon" />
                      <Text size="small" margin={{ left: "5px" }} weight="bold">
                        Join Event
                      </Text>
                    </div>
                  </Anchor>
                </Box>
              </CardHeader>
            </Stack>
            <Box direction="column" gap="medium" pad="medium">
              <Box gap="medium" direction="row" justify="start">
                <Calendar />
                <Text>02/01/2021 12:00</Text>
              </Box>

              <Box gap="medium" direction="row" justify="start">
                <Location />
                <Text>Troodos, Limassol</Text>
              </Box>
              <Box gap="medium" direction="row" justify="start">
                <CircleInformation />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Box>
            </Box>
            <hr color="#232334" style={{ width: "100%", height: "2px" }} />
            <Box direction="column" gap="medium" pad="medium">
              <Box direction="row" gap="medium">
                <Avatar size="medium" src="/assets/user.png" />
                <Box>
                  <Box direction="row" align="center" gap="small">
                    <Text weight="bold">Name Surname</Text>
                    <Text color="grey" size="small">
                      Few seconds ago
                    </Text>
                  </Box>

                  <Text>Comment about the event</Text>
                  <Text color="brand" size="small">
                    Reply
                  </Text>
                </Box>
              </Box>
              <Box direction="row" gap="medium">
                <Avatar size="medium" src="/assets/user.png" />
                <Box>
                  <Box direction="row" align="center" gap="small">
                    <Text weight="bold">Name Surname</Text>
                    <Text color="grey" size="small">
                      Few seconds ago
                    </Text>
                  </Box>

                  <Text>Comment about the event</Text>
                  <Text color="brand" size="small">
                    Reply
                  </Text>
                </Box>
              </Box>
              <Box direction="row" gap="medium" margin={{ left: "70px" }}>
                <Avatar size="medium" src="/assets/user.png" />
                <Box>
                  <Box direction="row" align="center" gap="small">
                    <Text weight="bold">Name Surname</Text>
                    <Text color="grey" size="small">
                      Few seconds ago
                    </Text>
                  </Box>

                  <Text>Comment about the event</Text>
                  <Text color="brand" size="small">
                    Reply
                  </Text>
                </Box>
              </Box>
              <Box direction="row" gap="medium">
                <Avatar size="medium" src="/assets/user.png" />
                <Box>
                  <Box direction="row" align="center" gap="small">
                    <Text weight="bold">Name Surname</Text>
                    <Text color="grey" size="small">
                      Few seconds ago
                    </Text>
                  </Box>

                  <Text>Comment about the event</Text>
                  <Text color="brand" size="small">
                    Reply
                  </Text>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetails;
