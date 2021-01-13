import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  console.log(process.env.REACT_APP_MAPGL_TOKEN);
  return (
    <ReactMapGL
      {...viewport}
      width="80vw"
      height="80vh"
      mapStyle="mapbox://styles/alextsa/ckjsyjsvh54t219rs6am40pe5"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPGL_TOKEN}
    />
  );
};

export default MapComponent;
