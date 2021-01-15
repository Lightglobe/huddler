import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Location } from "grommet-icons";

const MapComponent = ({ center, feature }) => {
  let localCenter = Array(2);
  if (center) {
    localCenter[0] = center[0];
    localCenter[1] = center[1];
  } else {
    localCenter[0] = 34.345;
    localCenter[1] = 31.234;
  }

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: localCenter[1],
    longitude: localCenter[0],
    zoom: 15,
  });
  return (
    <ReactMapGL
      {...viewport}
      width="80vw"
      height="80vh"
      center={localCenter}
      mapStyle="mapbox://styles/alextsa/ckjsyjsvh54t219rs6am40pe5"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPGL_TOKEN}
    >
      {feature && (
        <Marker
          latitude={feature.geometry.coordinates[1]}
          longitude={feature.geometry.coordinates[0]}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>
            {" "}
            <Location />
          </div>
        </Marker>
      )}
    </ReactMapGL>
  );
};

export default MapComponent;
