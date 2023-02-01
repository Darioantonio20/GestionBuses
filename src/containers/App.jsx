import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
            </Routes>
        </BrowserRouter>
      );
}

export default App;