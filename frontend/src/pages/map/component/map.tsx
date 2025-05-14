import { GeoJSONProps, MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

import Way_data from './geojson_data'; //Данные экспедиции в формате GeoJson
import MapTimeLine from '../timeline';
import './map.scss';

const MapComponent: React.FC = () => {

    return(
        <>
          <MapContainer 
          center={[0,0]}
          zoom={2}
          maxZoom={10}
          minZoom={2}
          className='map'
          >
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />

          <Marker position={[0,0]}>
              <Popup>ЭЙ ЧЕБУРЕК</Popup>
          </Marker>

          <GeoJSON data={Way_data}/>
          </MapContainer>

          <MapTimeLine />
        </>
    )
}

export default MapComponent;