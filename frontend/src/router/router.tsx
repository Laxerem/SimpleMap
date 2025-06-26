import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import MapPage from '../pages/map'
import AtlasPage from '../pages/atlas'
import Header from '../components/header'
import PreLoader from '../components/PreLoader'

function Router() {
    return <BrowserRouter>
    
    <Header/>
    <PreLoader />
        <Routes>
            <Route element={<Home />} path='/home' />
            <Route element={<MapPage />} path='/map' />
            <Route element={<AtlasPage />} path='/atlas'/>
        </Routes>
    </BrowserRouter>
}

export default Router