import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

function LeafletRoutingMachine({ waypoints }) {
    const map = useMap();
    const routingControl = useRef(null);

    useEffect(() => {
        if (waypoints.length > 0) {
            const newWaypoints = waypoints.map((waypoint) =>
                L.latLng(waypoint[0], waypoint[1])
            );

            if (routingControl.current) {
                // Очищаем предыдущие маршруты
                routingControl.current.getPlan().setWaypoints([]);
                routingControl.current.remove(); // Удаляем контроль маршрута
            }

            routingControl.current = L.Routing.control({
                waypoints: newWaypoints,
                addWaypoints: false,
            }).addTo(map);

            return () => {
                // Удаляем контрол маршрута при размонтировании компонента
                routingControl.current.getPlan().setWaypoints([]);
                routingControl.current.remove();
            };
        }
    }, [waypoints, map]);

    return null;
}

export { LeafletRoutingMachine };
