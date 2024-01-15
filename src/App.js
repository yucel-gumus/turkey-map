import React, { useEffect, useRef } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import proj4 from "proj4";

import turkeyGeoJSON from "./tr-cities.json";

proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
const TurkeyMap = () => {
  const mapRef = useRef();
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo([39.9255, 32.8609], 6);
    }
  }, []);
  return (
    <MapContainer
      center={[39.9255, 32.8609]}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url={process.env.PUBLIC_URL + "/map.png"}
        opacity={1}
        zIndex={0}
      />
      <GeoJSON
        data={turkeyGeoJSON}
        style={() => ({
          color: "black",
          weight: 1,
          fillColor: "transparent",
        })}
      />{" "}
    </MapContainer>
  );
};

export default TurkeyMap;
