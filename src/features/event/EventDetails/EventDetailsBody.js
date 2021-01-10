import React, { useState } from "react";
import { Box, Text, Anchor, Layer, Button, Heading, Avatar } from "grommet";
import {
  CircleInformation,
  Calendar,
  Location,
  Cluster,
  FormClose,
} from "grommet-icons";
import { format } from "date-fns";

const EventDetailsBody = ({ date, location, description, attendees }) => {
  const [showAttendance, setShowAttendance] = useState(false);
  return (
    <>
      <Box direction="column" gap="medium" pad="medium">
        <Box gap="medium" direction="row" justify="start">
          <Calendar />
          <Text>{format(new Date(date), "dd/MM/yyyy HH:mm")}</Text>
        </Box>

        <Box gap="medium" direction="row" justify="start">
          <Location />
          <Text>{location}</Text>
        </Box>
        <Box gap="medium" direction="row" justify="start">
          <CircleInformation />
          <Text>{description}</Text>
        </Box>
        <Box gap="medium" direction="row" justify="start">
          <Cluster />
          <Text>
            <Anchor
              color="brand"
              disabled={attendees.length === 0}
              onClick={() => setShowAttendance(true)}
            >
              {attendees.length} People Going
            </Anchor>
          </Text>
        </Box>
      </Box>
      {showAttendance && (
        <Layer>
          <Box
            background="darkTwo"
            align="center"
            direction="row"
            justify="end"
            width="large"
          >
            <Button
              icon={<FormClose size="large" />}
              onClick={() => setShowAttendance(false)}
            />
          </Box>
          <Box fill background="darkOne">
            {attendees.map((attendee) => (
              <Box
                direction="row"
                key={attendee.id}
                gap="medium"
                justify="between"
                margin={{
                  left: "25px",
                  right: "25px",
                  bottom: "10px",
                  top: "10px",
                }}
              >
                <Box direction="row" gap="small" align="center">
                  <Avatar src={attendee.photoURL} />
                  <Text>{attendee.name}</Text>
                </Box>
                <Button secondary color="brand">
                  Follow
                </Button>
              </Box>
            ))}
          </Box>
        </Layer>
      )}
    </>
  );
};

export default EventDetailsBody;
