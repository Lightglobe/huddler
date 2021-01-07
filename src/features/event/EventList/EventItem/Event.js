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
import { format } from "date-fns";
import { Clock, Location } from "grommet-icons";
import EventAttendee from "../EventAttendee/EventAttendee";
import { Link } from "react-router-dom";
export default class Event extends Component {
  render() {
    const event = this.props.event;

    return (
      <Card width="large" background="darkTwo" elevation="none" margin="small">
        <CardHeader pad="medium">
          <Box direction="row" align="center">
            <Avatar src={event.hostPhotoURL} size="large" round="small" />
            <Box direction="column" pad={{ left: "medium" }}>
              <Text weight="bold" size="large" margin={{ bottom: "xsmall" }}>
                {event.title}
              </Text>
              <Text size="medium">
                Hosted by{" "}
                <Anchor color="brand" label={event.hostedBy} href="#" />
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
              bottom: "small",
            }}
            margin={{ bottom: "large" }}
          >
            <Text>{event.description}</Text>
          </Box>
          {event.attendees && (
            <Box
              pad={{
                left: "medium",
                right: "medium",
                top: "small",
                bottom: "small",
              }}
              direction="row"
              background="darkThree"
              gap="medium"
            >
              <Box align="center" direction="row" gap="small">
                {event.attendees.map((attendee) => (
                  <EventAttendee
                    key={attendee.id}
                    id={attendee.id}
                    name={attendee.name}
                    photoURL={attendee.photoURL}
                  />
                ))}
              </Box>
            </Box>
          )}
        </CardBody>
        <CardFooter pad="medium" background="darkTwo">
          <Box direction="row" align="center" gap="medium">
            <Box direction="row" gap="xxsmall">
              <Clock />{" "}
              <Text>{format(new Date(event.date), "dd/MM/yyyy HH:mm")}</Text>
            </Box>
            <Box direction="row" gap="xxsmall">
              <Location /> <Text>{event.city}</Text>
            </Box>
          </Box>
          <Link className="link__text">
            <div className="border__gradient button">
              <span>View</span>
            </div>
          </Link>
        </CardFooter>
      </Card>
    );
  }
}
