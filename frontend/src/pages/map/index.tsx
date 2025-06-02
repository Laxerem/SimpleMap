import MapComponent from './MapComponent'
import MapContextProvider from '../../context/map/provider'

const MapPage = () => {
    return (
        <div className='map_container'>
            <MapContextProvider>
                <MapComponent />
            </MapContextProvider>
        </div>
    )
}

export default MapPage