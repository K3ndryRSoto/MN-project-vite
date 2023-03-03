import { BrowserRouter, Route,Routes, } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register';
import { Home } from "../pages/Home";
 
function Rutas () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
    
}

export default Rutas;