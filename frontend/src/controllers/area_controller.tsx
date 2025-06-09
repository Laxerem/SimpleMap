import React, { PropsWithChildren, useEffect, useState } from "react"
import { useMapContext } from "../context/map/map_context"
import { AreaData, StageArea } from "../pages/map/settings/interface/IWaySettings"
import { Polygon } from "react-leaflet"
import { LatLngExpression, PolylineOptions } from "leaflet"
import { useWayContext } from "../context/way/way_context"
import WayObject from "../pages/map/way/way_object"

interface AreaControllerProps {
    polygons_area: StageArea
}

const convertGeoJsonToLatLng = (geoJson: GeoJSON.Polygon): LatLngExpression[][] => {
    return geoJson.coordinates.map((polygon) =>
      polygon.map(([lng, lat]) => ({ lat, lng }))
    );
};

const DefaultAreaStyle: PolylineOptions = {
    weight: 1
}

const AreaController: React.FC<PropsWithChildren<AreaControllerProps>> = ({polygons_area}) => {
    const {zoomContext, setViewContext} = useMapContext()
    const {setStageId, setDistance, setStageInfoWindow} = useWayContext()
    const [requiredPolygons, setRequiredPolygons] = useState<{ key: string; style?: PolylineOptions; stage_id: number; data: AreaData }[]>([]);
    const [isHover, setIsHover] = useState<boolean>(false)
    
    useEffect(() => {
        const newPolygons = Object.entries(polygons_area)

        .filter(([, stage]) => stage.dynamic_area[zoomContext] !== undefined)
        .map(([key, stage]) => ({ key, stage_id: stage.stage_id, style: stage.style, data: stage.dynamic_area[zoomContext] }));
    
        if (newPolygons.length > 0) {
          setRequiredPolygons(newPolygons);
        }

    }, [polygons_area, zoomContext]);

    const handle_click = (stage_id: number, view_coords: any) => {
        const coords: LatLngExpression = [view_coords[1], view_coords[0]]

        setStageId(stage_id)
        setDistance(WayObject.get_stage(stage_id).distance)
        setViewContext(coords)
        setStageInfoWindow(true)
    }

    const handle_hover = () => {
        setIsHover(!isHover)
    }

    return (
        <>
            {
                requiredPolygons.map(({key, stage_id, data, style}) => (
                    <Polygon 
                    key={key} 
                    positions={convertGeoJsonToLatLng(data.geo_json)}
                    eventHandlers={{
                        click: () => handle_click(stage_id, data.view_coords),
                        mouseover: () => handle_hover()
                    }}
                    {...(style || DefaultAreaStyle)}
                    >
                    
                    </Polygon>
                ))
            }
        </>
    )
}

export default AreaController