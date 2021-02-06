import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

export default function Maps(props) {

  return (
    <MapContainer center={[25.6912, 78.4138]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <MarkerClusterGroup>
      {props.data5
        .filter((x) =>
          x.lat != null && x.long != null && props.showData == 0
            ? x.countryRegion
            : props.showData == x.countryRegion
        )
        .map((datas) => (
            <Marker key={datas.uid} position={[datas.lat, datas.long]}>
              <Tooltip
                permanent={true}
                direction="top"
                className="tooltip-good"
              >
                <p>
                  <strong>Active</strong>
                </p>
                <p>
                  <strong>{datas.active}</strong>
                </p>
              </Tooltip>
              <Popup>
                <h4>State:{datas.combinedKey}</h4>
                <h4>confirmed:{datas.confirmed}</h4>
                <h4>recovered:{datas.recovered}</h4>
                <h4>deaths:{datas.deaths}</h4>
              </Popup>
            </Marker>
        ))}
        </MarkerClusterGroup>
    </MapContainer>
  );
}
