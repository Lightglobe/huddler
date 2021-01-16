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
import EventForm from "../EventForm/EventForm";
import { withRouter } from "react-router";

const EventDetailsHeader = ({
  title,
  category,
  hostedBy,
  hostPhotoURL,
  setShowSidebar,
  showSidebar,
  size,
  deleteEvent,
  id,
  history,
}) => {
  return (
    <Stack anchor="bottom-left" flex>
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
        pad={{ top: "small", bottom: "small", left: "medium", right: "medium" }}
        justify="between"
        width="xlarge"
        background="#1D1C2AA0"
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
        <Box
          direction="row"
          gap="small"
          margin={{ right: size === "small" ? "550px" : "300px" }}
        >
          <Anchor
            className="link__text"
            onClick={() => {
              history.goBack();
              deleteEvent(id);
            }}
          >
            <div
              className="border__gradient button"
              style={{ background: "#6e747d" }}
            >
              <Text size="small" margin={{ left: "5px" }} weight="bold">
                Delete
              </Text>
            </div>
          </Anchor>
          <Anchor
            className="link__text"
            onClick={() => setShowSidebar(!showSidebar, <EventForm />)}
          >
            <div
              className="border__gradient button"
              style={{ background: "#6e747d" }}
            >
              {showSidebar ? (
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  Cancel Edit
                </Text>
              ) : (
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  Edit
                </Text>
              )}
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

export default withRouter(EventDetailsHeader);
