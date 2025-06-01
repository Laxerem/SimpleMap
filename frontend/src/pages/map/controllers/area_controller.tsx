import React, { PropsWithChildren, useEffect, useState } from "react"
import { useMapContext } from "../../../context/map/map_context"
import { AreaData, StageArea } from "../settings/interface/IWaySettings"
import { Polygon, Tooltip } from "react-leaflet"
import { LatLngExpression } from "leaflet"
import { useWayContext } from "../../../context/way/way_context"

interface AreaControllerProps {
    polygons_area: StageArea
}

const convertGeoJsonToLatLng = (geoJson: GeoJSON.Polygon): LatLngExpression[][] => {
    return geoJson.coordinates.map((polygon) =>
      polygon.map(([lng, lat]) => ({ lat, lng }))
    );
  };

const AreaController: React.FC<PropsWithChildren<AreaControllerProps>> = ({polygons_area}) => {
    const {zoomContext} = useMapContext()
    const {setDistance} = useWayContext()
    const [requiredPolygons, setRequiredPolygons] = useState<{ key: string; data: AreaData }[]>([]);
    
    useEffect(() => {
        const newPolygons = Object.entries(polygons_area)

        .filter(([, stage]) => stage.dynamic_area[zoomContext] !== undefined)
        .map(([key, stage]) => ({ key, data: stage.dynamic_area[zoomContext] }));
    
        if (newPolygons.length > 0) {
          setRequiredPolygons(newPolygons);
        }

      }, [polygons_area, zoomContext]);
    
    const handle_click = () => {
        setDistance
    }
    

    return (
        <>
            {
                requiredPolygons.map(({key, data}) => (
                    <Polygon 
                    key={key} 
                    positions={convertGeoJsonToLatLng(data.geo_json)}
                    eventHandlers={{
                        click: () => handle_click
                    }}
                    >
                        <Tooltip sticky direction="top">{key}</Tooltip>
                    </Polygon>
                ))
            }
        </>
    )
}

export default AreaController