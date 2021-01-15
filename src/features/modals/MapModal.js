import React from "react";
import { Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";
import MapComponent from "../event/EventMap/MapComponent";
import { closeModal } from "./modalActions";
import { connect } from "react-redux";

const actions = {
  closeModal,
};

const mapStateToProps = (state, ownProps) => ({
  center: state.modals.modalProps.center,
  feature: state.modals.modalProps.feature,
});

const MapModal = ({ closeModal, center, feature }) => {
  return (
    <Box style={{ height: "100%" }} background="darkOne">
      <Layer>
        <Box
          background="darkTwo"
          align="center"
          direction="row"
          justify="end"
          width="xlarge"
        >
          <Button
            onClick={() => closeModal()}
            icon={<FormClose size="large" />}
          />
        </Box>
        <Box fill background="darkOne">
          <MapComponent center={center} feature={feature} />
        </Box>
      </Layer>
    </Box>
  );
};

export default connect(mapStateToProps, actions)(MapModal);
