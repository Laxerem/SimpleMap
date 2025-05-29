import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css"
import '../../styles/map.scss';

import MapSettings from '../../settings/MapSettings';
import WayObject from '../way/way_object';

import WayContextListner from '../../../../context/way/context_listner';
import MapContextListner from '../../../../context/map/context_listner';

import WayContextProvider from '../../../../context/way/provider';
import { useMapContext } from '../../../../context/map/map_context';
import MapController from '../../controllers/map_controller';
import WayMap from '../way/way_map';
import MapTimeLine from '../timeline';


const MapComponent: React.FC = () => {
  const {zoomContext, viewContext} = useMapContext()

    return(
        <WayContextProvider>
          {MapSettings.listen_events ? <MapContextListner /> : null}
          {MapSettings.listen_events && MapSettings.way_display ? <WayContextListner /> : null}

          <MapContainer
            {...MapSettings.props}
            center={viewContext}
            zoom={zoomContext}
            className={"map"}
            preferCanvas={true}
          >

        

            <TileLayer
              url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              zIndex={0}
            />

            {MapSettings.way_display ? <WayMap /> : null}
            
            <MapController />

          </MapContainer>
          <MapTimeLine way_obj={WayObject} max={100}/>
        </WayContextProvider>
    )
}

export default MapComponent;