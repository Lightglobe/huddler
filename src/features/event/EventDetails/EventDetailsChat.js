import React from "react";
import { Box, Text, Avatar } from "grommet";
const EventDetailsChat = () => {
  return (
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
  );
};

export default EventDetailsChat;
