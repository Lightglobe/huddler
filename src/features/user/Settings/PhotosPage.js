import React from "react";
import {
  Box,
  Heading,
  Tabs,
  Tab,
  Image,
  Carousel,
  Text,
  Anchor,
} from "grommet";

const PhotosPage = () => {
  return (
    <Box background="darkTwo" round="small" width="large">
      <Heading level="3" margin="medium" alignSelf="center">
        My Photos
      </Heading>
      <Tabs alignControls="stretch">
        <Tab margin="medium" plain title="Step 1 - Add Photo">
          <Box alignSelf="center">
            <Carousel
              fill
              style={{ width: "300px" }}
              alignSelf="center"
              margin="medium"
            >
              <Image src="/assets/user.png" style={{ width: "300px" }} />
              <Image src="/assets/user.png" style={{ width: "300px" }} />
            </Carousel>
            <Anchor
              className="link__text"
              alignSelf="center"
              margin="medium"
              style={{ width: "200px" }}
            >
              <div className="border__gradient button">
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  Upload Photo
                </Text>
              </div>
            </Anchor>
          </Box>
        </Tab>
        <Tab plain margin="medium" title="Step 2 - Resize Image">
          <Box alignSelf="center" alignContent="center">
            <Image
              margin="medium"
              alignSelf="center"
              src="/assets/user.png"
              style={{ width: "300px" }}
            />
            <Anchor
              className="link__text"
              alignSelf="center"
              margin="medium"
              style={{ width: "200px" }}
            >
              <div className="border__gradient button">
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  Resize image
                </Text>
              </div>
            </Anchor>
          </Box>
        </Tab>
        <Tab plain margin="medium" title="Step 3 - Preview and upload">
          <Box alignSelf="center" alignContent="center">
            <Image
              margin="medium"
              alignSelf="center"
              src="/assets/user.png"
              style={{ width: "300px" }}
            />
            <Anchor
              className="link__text"
              alignSelf="center"
              margin="medium"
              style={{ width: "200px" }}
            >
              <div className="border__gradient button">
                <Text size="small" margin={{ left: "5px" }} weight="bold">
                  Upload
                </Text>
              </div>
            </Anchor>
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default PhotosPage;
