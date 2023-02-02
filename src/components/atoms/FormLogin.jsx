import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormLogin.css'

function FormLogin() {
    const navigate = useNavigate()
    const form = useRef()
    const handlerClick = (e) => {
        e.preventDefault()
    
        const newForm = new FormData(form.current)
        alert('  UserName: ' + newForm.get('userName') + '  Password: ' + newForm.get('password'));
        alert('{"status":true,"message":"El registro se almacenó correctamente"}');
        navigate("/altabus");
    }
   
    return (
        <>
        <form ref={form} className="form-register">
                <h2 className="form__titulo">Login</h2>
                <div className="contenedor-inputs">
                    <input className="input-100" type="text" name='userName' id='userName' placeholder="Nombre De Usuario" ></input>
                    <input className="input-100" type="password" name='password' id='password' placeholder="Contraseña" ></input>
                    <button className="btnAltaBus" onClick={handlerClick} >Acceder</button>
                </div>
                <Link className='registrarseLogin' to="/register">Registrarse</Link>
            </form>
        </>
      );
      //los estados son asincronos
}
export default FormLogin;