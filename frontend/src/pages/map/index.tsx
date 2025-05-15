import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import MapComponent from './component/map'
import MapContextProvider from './component/provider'

const MapPage = () => {
    return (
        <MapContextProvider>
            <MapComponent />
        </MapContextProvider>
    )
}

export default MapPage