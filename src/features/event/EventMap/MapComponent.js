import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Location } from "grommet-icons";

const MapComponent = ({ center, feature }) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: center[1],
    longitude: center[0],
    zoom: 15,
  });
  console.log(process.env.REACT_APP_MAPGL_TOKEN);
  return (
    <ReactMapGL
      {...viewport}
      width="80vw"
      height="80vh"
      center={center}
      mapStyle="mapbox://styles/alextsa/ckjsyjsvh54t219rs6am40pe5"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPGL_TOKEN}
    >
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
    </ReactMapGL>
  );
};

export default MapComponent;
