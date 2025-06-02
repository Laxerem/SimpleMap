import React, { PropsWithChildren, useEffect, useState } from "react"
import { useMapContext } from "../context/map/map_context"
import { AreaData, StageArea } from "../pages/map/settings/interface/IWaySettings"
import { Polygon, Tooltip } from "react-leaflet"
import { LatLngExpression } from "leaflet"
import { useWayContext } from "../context/way/way_context"

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
    const {setStageId} = useWayContext()
    const [requiredPolygons, setRequiredPolygons] = useState<{ key: string; stage_id: number; data: AreaData }[]>([]);
    
    useEffect(() => {
        const newPolygons = Object.entries(polygons_area)

        .filter(([, stage]) => stage.dynamic_area[zoomContext] !== undefined)
        .map(([key, stage]) => ({ key, stage_id: stage.stage_id, data: stage.dynamic_area[zoomContext] }));
    
        if (newPolygons.length > 0) {
          setRequiredPolygons(newPolygons);
        }

      }, [polygons_area, zoomContext]);
    
    const handle_click = (stage_id: number) => {
        setStageId(stage_id)
    }

    return (
        <>
            {
                requiredPolygons.map(({key, stage_id, data}) => (
                    <Polygon 
                    key={key} 
                    positions={convertGeoJsonToLatLng(data.geo_json)}
                    eventHandlers={{
                        click: () => handle_click(stage_id)
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