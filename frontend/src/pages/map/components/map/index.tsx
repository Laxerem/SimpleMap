import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css"
import '../../styles/map.scss';

import MapSettings from '../../settings/MapSettings';
import { TimeLineSettings } from '../../settings/TimeLineSettings';
import WayObject from '../../settings/WayObject';

import MapContextListner from '../../../../context/map/context_listner';
import { useMapContext } from '../../../../context/map/map_context';
import MapController from '../../controllers/map_controller';
import WayMap from './way_map';
import MapTimeLine from '../timeline';

const MapComponent: React.FC = () => {
  const {zoomContext, viewContext} = useMapContext()

    return(
        <>
          {MapSettings.listen_events ? <MapContextListner /> : null}

          <MapContainer
            {...MapSettings.props}
            center={viewContext}
            zoom={zoomContext}
            className={"map"}
          >

            <TileLayer
              url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              zIndex={0}
            />

            {MapSettings.way_display ? <WayMap /> : null}
            
            <MapController />

          </MapContainer>
          <MapTimeLine way_obj={WayObject.data} max={100}/>
        </>
    )
}

export default MapComponent;