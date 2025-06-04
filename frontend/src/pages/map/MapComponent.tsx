import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css"
import './styles/map.scss';

import MapSettings from './settings/MapSettings';
import WayObject from './way/way_object';

import WayContextListner from '../../context/way/context_listner';
import MapContextListner from '../../context/map/context_listner';

import WayContextProvider from '../../context/way/provider';
import { useMapContext } from '../../context/map/map_context';
import MapController from '../../controllers/core/MapController';
import WayMap from './WayMap';
import MapTimeLine from './TimeLine';
import { Mark } from '@mui/material/Slider/useSlider.types';
import StageComponent from './StageComponent';


const MapComponent: React.FC = () => {
    const {zoomContext, viewContext} = useMapContext()

    const distance = WayObject.total_distance()

    const marks: Mark[] = Object.keys(WayObject.get_all_stages()).map(key => WayObject.get_stage(Number(key))).map(way_stage => ({
      label: way_stage.stage.name,
      value: 100 / (distance / way_stage.distance)
    }))

    return (
        <WayContextProvider>
          {MapSettings.listen_events ? <MapContextListner /> : null}
          {MapSettings.listen_events && MapSettings.way_display ? <WayContextListner /> : null}

          <MapContainer
            {...MapSettings.props}
            center={viewContext}
            zoom={zoomContext}
            className={"map"}
            preferCanvas={true}
            zoomControl={false}
          >


            <TileLayer
              url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              zIndex={0}
            />

            {MapSettings.way_display ? <WayMap /> : null}
            <MapController />
            <StageComponent />

          </MapContainer>
          <MapTimeLine total_distance={distance} marks={marks}/>
        </WayContextProvider>
    )
}

export default MapComponent;