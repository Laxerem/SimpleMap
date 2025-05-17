import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

import MapController from './controller/map_controller';

import Way_data from './geojson_data'; //Данные экспедиции в формате GeoJson
import MapTimeLine from '../timeline';
import './map.scss';

import { useMapContext } from '../../../context/map/map_context';
import { useEffect } from 'react';

const MapComponent: React.FC = () => {
  const {zoomContext, zoomCenterContext, stage} = useMapContext()

  useEffect(() => {
    console.log(`Зум: ${zoomContext}`)
  }, [zoomContext])

  useEffect(() => {
    console.log(`Позиция: ${zoomCenterContext}`)
  }, [zoomCenterContext])

  useEffect(() => {
    console.log(`Стадия: ${stage}`)
  }, [stage])

    return(
        <>
          <MapContainer 
          center={zoomCenterContext}
          zoom={zoomContext}
          maxZoom={10}
          minZoom={1.7}
          className='map'
          >

            <TileLayer
              url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            <GeoJSON data={Way_data}/>
            <MapController />

          </MapContainer>
          <MapTimeLine />
        </>
    )
}

export default MapComponent;