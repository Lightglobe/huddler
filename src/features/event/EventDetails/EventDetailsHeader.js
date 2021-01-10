import React from "react";
import {
  Box,
  CardHeader,
  Heading,
  Text,
  Avatar,
  Anchor,
  Stack,
  CardBody,
  Image,
} from "grommet";
import { Sign } from "grommet-icons";

const EventDetailsHeader = ({ title, category, hostedBy, hostPhotoURL }) => {
  return (
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
          <Avatar src={hostPhotoURL} a11yTitle="avatar" />
          <Box>
            <Heading level="3" margin="none">
              {title}
            </Heading>
            <Text size="small">Hosted by {hostedBy}</Text>
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
  );
};

export default EventDetailsHeader;
