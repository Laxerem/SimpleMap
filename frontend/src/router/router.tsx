import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'

function Router() {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
        </Routes>
    </BrowserRouter>
}

export default Router