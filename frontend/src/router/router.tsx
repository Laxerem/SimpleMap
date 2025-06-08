import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import MapPage from '../pages/map'
import Header from '../components/header'

function Router() {
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<MapPage />} path='/map' />
        </Routes>
    </BrowserRouter>
}

export default Router