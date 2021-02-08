import React from "react";
import { Box, Heading, Tabs, Tab, Image, Carousel, Button } from "grommet";

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
            <Button alignSelf="center" margin="large">
              Upload a photo
            </Button>
          </Box>
        </Tab>
        <Tab plain margin="medium" title="Step 2 - Resize Image">
          <Box pad="medium">Two</Box>
        </Tab>
        <Tab plain margin="medium" title="Step 3 - Preview and upload">
          <Box pad="medium">three</Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default PhotosPage;
