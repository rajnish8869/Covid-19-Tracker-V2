import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";



export default function Maps(props) {

  var verypoor = new Icon({
    iconUrl: "http://nbiot.urbansciences.in/image-marker/very-poor.png",
    iconSize: [35, 35],
    iconAnchor: [17, 34],
    // popupAnchor: [1, -34],
    // shadowSize: [41, 41],
  });

  // const [data, setData] = useState([]);

  // useEffect(() => {

  //    fetch("https://covid19.mathdro.id/api/recovered")
  //     .then((results) => results.json())
  //     .then((data) => setData( data));

  // }, [])

  return (
    <MapContainer center={[24.6912, 78.4138]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.data5.filter((x) => x.lat != null && x.long != null && props.showData == 0 ? x.countryRegion : props.showData == x.countryRegion).map((datas) => (
        <Marker
        key={datas.uid}
          position={[datas.lat,datas.long]}
        >
          <Tooltip permanent={true} direction='top' className="tooltip-good">
            <p><strong>Active</strong></p>
            <p><strong>{datas.active}</strong></p>
          </Tooltip>
          <Popup>
            <h4>State:{datas.combinedKey}</h4>
            <h4>confirmed:{datas.confirmed}</h4>
            <h4>recovered:{datas.recovered}</h4>
            <h4>deaths:{datas.deaths}</h4>
          </Popup>
        </Marker>

      ))}
    </MapContainer>
  );
}
