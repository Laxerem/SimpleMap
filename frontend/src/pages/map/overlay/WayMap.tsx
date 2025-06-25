import React, { PropsWithChildren, useEffect, useState } from "react";
import { useWayContext } from "../../../context/way/way_context";
import { Polyline } from "react-leaflet";
import { WaySegment } from "../settings/interface/IWaySettings";
import { Icon } from "leaflet";
import Ship from "../../../components/Ship";
import { WayShipIcon } from "../../../data/icons";

interface WayMapProps {
  way: WaySegment[];
  point_icon?: Icon;
}

const WayMap: React.FC<PropsWithChildren<WayMapProps>> = ({ way }) => {
    const { distance, setCoords, coords } = useWayContext();
    const [currentPath, setCurrentPath] = useState<[number, number][]>([]);

    useEffect(() => {
        const filteredSegments = way
        .map((segment) => {
            const filteredPoints = Object.entries(segment.way_points)
            .filter(([, point]) => point.distance <= distance)
            .map(([, point]) => point.coordinates as [number, number]);
            return filteredPoints.length > 1 ? filteredPoints : [];
        })
        .filter((segment) => segment.length > 0);

        const lastSegment = filteredSegments[filteredSegments.length - 1] || [];

        if (lastSegment.length > 0) {
            const lastCoords = lastSegment[lastSegment.length - 1];
            setCoords(lastCoords); // Обновляем координаты корабля
            setCurrentPath(lastSegment); // Обновляем путь
        } 
        else {
            setCoords(null);
            setCurrentPath([]); // Если нет точек, путь пустой
        }

    }, [distance, way, setCoords]);

  return (
    <>
      {currentPath.length > 0 && (
        <Polyline
          positions={currentPath}
          pathOptions={{
            color: "yellowgreen",
            weight: 2,
            opacity: 0.7,
            lineCap: "round",
          }}
        />
      )}
      <Ship coords={coords} icon={WayShipIcon} name="Восток и Мирный" />
    </>
  );
};

export default WayMap;