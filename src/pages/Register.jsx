import FormRegister from "../components/atoms/FormRegister";
import Imagenes from "../components/atoms/Imagenes";
import imgCherry from '../assets/imgs/imgCherry.png'
import '../assets/styles/Imagenes.css'
function Register() {
    return ( 
        <>
            <FormRegister></FormRegister>
            <div className="imgCherry">
                <Imagenes imagen={imgCherry}></Imagenes>
            </div>
        </>
     );
}

export default Register;