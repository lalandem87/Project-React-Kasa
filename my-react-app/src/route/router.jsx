import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Logements from '../pages/Logements'
import Error404 from '../pages/Error404'
import About from '../pages/About'

export default function Router(){
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/logements' element={<Logements />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<Error404 />}/>
        </Routes>
    )
}

