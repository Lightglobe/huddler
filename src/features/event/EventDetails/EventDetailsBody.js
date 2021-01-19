import React, { useState } from "react";
import { Box, Text, Anchor, Layer, Button, Avatar } from "grommet";
import {
  CircleInformation,
  Calendar,
  Location,
  Cluster,
  FormClose,
} from "grommet-icons";
import moment from "moment";
import MapComponent from "../EventMap/MapComponent";
import { openModal } from "../../modals/modalActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const actions = {
  openModal,
};

const EventDetailsBody = ({
  date,
  location,
  description,
  attendees,
  openModal,
}) => {
  const [showAttendance, setShowAttendance] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <Box direction="column" gap="medium" pad="medium">
        <Box gap="medium" direction="row" justify="start">
          <Calendar />
          <Text>{moment(new Date(date)).format("DD-MM-YYYY HH:mm")}</Text>
        </Box>

        <Box gap="medium" direction="row" justify="start">
          <Location />
          <Text>
            <Anchor
              color="brand"
              onClick={() =>
                openModal("MapModal", {
                  center: location.center,
                  feature: location.feature,
                })
              }
            >
              {location?.label}
            </Anchor>
          </Text>
        </Box>
        <Box gap="medium" direction="row" justify="start">
          <CircleInformation />
          <Text>{description}</Text>
        </Box>
        {attendees && (
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
        )}
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
      {showMap && (
        <Layer>
          <Box
            background="darkTwo"
            align="center"
            direction="row"
            justify="end"
            width="xlarge"
          >
            <Button
              icon={<FormClose size="large" />}
              onClick={() => setShowMap(false)}
            />
          </Box>
          <Box fill background="darkOne">
            <MapComponent center={location.center} feature={location.feature} />
          </Box>
        </Layer>
      )}
    </>
  );
};

export default connect(mapStateToProps, actions)(EventDetailsBody);
