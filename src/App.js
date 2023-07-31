import "leaflet/dist/leaflet.css";
import "./index.css";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Table } from "./components/Table";
import { useEffect, useState } from "react";
import { L } from "leaflet";
import { LeafletRoutingMachine } from "./components/LeafletRoutingMachine";

export default function App() {
    const [polyline, setPolyline] = useState();
    const [markers, setMarkers] = useState([]);
    const [waypoints, setWaypoints] = useState([]);

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/7576/7576339.png",
        iconSize: [38, 38],
    });

    return (
        <div style={{ width: "100vw", display: "flex", alignItems: "center" }}>
            <Table setWaypoints={setWaypoints} setPolyline={setPolyline} />
            <MapContainer center={waypoints[0]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {waypoints.map((marker) => (
                    <Marker position={marker} icon={customIcon}></Marker>
                ))}
                <LeafletRoutingMachine waypoints={waypoints} />
                {/* <Polyline positions={markers} /> */}
            </MapContainer>
        </div>
    );
}
