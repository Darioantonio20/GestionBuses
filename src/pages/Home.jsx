import { Link } from "react-router-dom";
import Imagenes from "../components/atoms/Imagenes";
import autobusHome from "../assets/imgs/autobusHome.jpeg"
import '../assets/styles/Texto.css'
import '../assets/styles/Imagenes.css'




function Home(){
   
    return (
        <>
        <div className="imagencitaHome">
            <Imagenes imagen={autobusHome}></Imagenes>
        </div>
            <Link className="inicarSesion" to="/login">Iniciar sesión</Link>
        </>
    )
}

export default Home;