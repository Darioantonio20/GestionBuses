import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AltaBus from '../pages/AltaBus';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RickAndMorty from '../pages/RickAndMorty';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/rickandmorty' element={<RickAndMorty/>}/>
                <Route path='/altabus' element={<AltaBus/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;