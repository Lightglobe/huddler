import React from "react";
import { Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";
import EventFormHorizontal from "../event/EventForm/EventFormHorizontal";
import { closeModal } from "./modalActions";
import { connect } from "react-redux";

const actions = {
  closeModal,
};

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const EventFormModal = ({ closeModal }) => {
  return (
    <Box style={{ height: "100%" }} background="darkOne">
      <Layer round="small" width="900px">
        <Box
          background="darkTwo"
          align="center"
          direction="row"
          justify="end"
          width="xlarge"
          fill
        >
          <Button
            onClick={() => closeModal()}
            icon={<FormClose size="large" />}
          />
        </Box>
        <Box background="darkOne" width="500px">
          <Box
            background="darkTwo"
            round="small"
            overflow="auto"
            style={{ width: "400px" }}
            pad="medium"
            margin={{
              left: "auto",
              right: "auto",
              top: "medium",
              bottom: "medium",
            }}
          >
            <EventFormHorizontal closeParent={closeModal} />
          </Box>
        </Box>
      </Layer>
    </Box>
  );
};

export default connect(mapStateToProps, actions)(EventFormModal);
