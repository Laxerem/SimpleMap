import MapComponent from './MapComponent'
import MapContextProvider from '../../context/map/provider'
import ResultsExpedition from './results'
import MapPreview from './MapPreview'

const MapPage = () => {
    return (
        <>
        <MapPreview/>
        <div className='map_container'>
            <MapContextProvider>
                <MapComponent />
            </MapContextProvider>
        </div>
        <ResultsExpedition />
        </>
    )
}

export default MapPage