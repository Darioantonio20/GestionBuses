import FormLogin from "../components/atoms/FormLogin";
import Imagenes from "../components/atoms/Imagenes";
import imgDrPepper from '../assets/imgs/imgDrPepper.png'
import '../assets/styles/Imagenes.css'

function Login() {
    return (
      <>
        <FormLogin></FormLogin>
        <div className="imagenDrPapper">
          <Imagenes imagen={imgDrPepper}></Imagenes>
        </div>
      </>
      );
}

export default Login;