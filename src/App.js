import "leaflet/dist/leaflet.css";
import "./index.css";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Table } from "./components/Table";
import { useState } from "react";

export default function App() {
    const [polyline, setPolyline] = useState();
    const [markers, setMarkers] = useState([]);

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/7576/7576339.png",
        iconSize: [38, 38],
    });

    console.log(polyline);

    return (
        <div style={{ width: "100vw", display: "flex", alignItems: "center" }}>
            <Table setPolyline={setPolyline} />
            <MapContainer center={[59.84660399, 30.29496392]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker) => (
                    <Marker
                        position={marker.geocode}
                        icon={customIcon}
                    ></Marker>
                ))}
                <Polyline positions={markers} />
            </MapContainer>
        </div>
    );
}
