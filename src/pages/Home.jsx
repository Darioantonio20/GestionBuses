import { Link } from "react-router-dom";
import Imagenes from "../components/atoms/Imagenes";
import imgHome from "../assets/imgs/imgHome.png"
import '../assets/styles/Texto.css'




function Home(){
   
    return (
        <>
            <Imagenes imagen={imgHome}></Imagenes>
            <Link className="inicarSesion" to="/login">Iniciar sesión</Link>
        </>
    )
}

export default Home;