import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import MapPage from '../pages/map'
import AtlasPage from '../pages/atlas'
import Header from '../components/header'

function Router() {
    return (
    <BrowserRouter basename='/SimpleMap'>
    <Header/>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route element={<Home />} path='/home' />
            <Route element={<MapPage />} path='/map' />
            <Route element={<AtlasPage />} path='/atlas'/>
            <Route path="*" element={null} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router