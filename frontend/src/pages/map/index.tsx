import MapComponent from './MapComponent'
import MapContextProvider from '../../context/map/provider'
import ResultsExpedition from './results'
import MapPreview from './MapPreview'
import DiscoverValue from './DiscoverValue'
import './styles/index.scss'

const MapPage = () => {
    return (
        <>
        <MapPreview/>
        <div className='map_container'>
            <MapContextProvider>
                <MapComponent />
            </MapContextProvider>
        </div>
        <DiscoverValue />
        <ResultsExpedition />
        </>
    )
}

export default MapPage