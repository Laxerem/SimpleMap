import { GeoJSONProps, MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

import ZoomController from './zoom_controller';
import Way_data from './geojson_data'; //Данные экспедиции в формате GeoJson
import MapTimeLine from '../timeline';
import './map.scss';

import { useMapContext } from '../../../context/map/map_context';
import { useEffect } from 'react';

const MapComponent: React.FC = () => {
  const {stage, zoomContext} = useMapContext()

  useEffect(() => {
    console.log(zoomContext)
  }, [zoomContext])

    return(
        <>
          <MapContainer 
          center={[56,20]}
          zoom={zoomContext}
          maxZoom={10}
          minZoom={1.7}
          className='map'
          >
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />

          <GeoJSON data={Way_data}/>
          <ZoomController />
          </MapContainer>

          <MapTimeLine />
        </>
    )
}

export default MapComponent;