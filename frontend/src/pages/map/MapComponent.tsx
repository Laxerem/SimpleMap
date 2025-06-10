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
import MapTimeLine from './TimeLine';
import { Mark } from '@mui/material/Slider/useSlider.types';
import { timeLineMarks } from '../../data/timeline_marks';

import MapOverlay from './MapOverlay';

const MapComponent: React.FC = () => {
    const {zoomContext, viewContext} = useMapContext()

    const distance = WayObject.total_distance()

    const marks: Mark[] = timeLineMarks.map(time => time.mark)

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

            <MapController way_object={WayObject}/>
            <MapOverlay />

          </MapContainer>
          <MapTimeLine total_distance={distance} marks={marks}/>
        </WayContextProvider>
    )
}

export default MapComponent;