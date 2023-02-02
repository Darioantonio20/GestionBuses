import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormRegister.css'


function FormRegister() {
    const navigate = useNavigate()
    //const name = useRef()
    //const username = useRef()
   //const password = useRef()
    const form = useRef()
    const handlerClick = (e)=> {
        e.preventDefault();
        //alert('Nombre: ' + name.current.value + 'UsereName: ' + username.current.value + 'Password: ' + password.current.value)
        //alert('UsereName: ' + username.current.value);
        //alert('Password: ' + password.current.value);
        //navigate("/")
        const newForm = new FormData(form.current)
        alert(' Nombre: '+ newForm.get('name') + '  UserName: '+ newForm.get('userName') + '  Correo: ' + newForm.get('correo') + '  Password: ' + newForm.get('password'));
    }
   
    return ( 
        <form ref={form} className="form-register">
                <h2 className="form__titulo">Login</h2>
                <div className="contenedor-inputs">
                    <input className="input-100" type="text" placeholder="Nombre De Completo" name='name' id="name"></input>
                    <input className="input-100" type="text" placeholder="Nombre De Usuario" name='userName' id="userName"></input>
                    <input className="input-100" type="text" placeholder="Correo Eléctronico" name='correo' id="correo"></input>
                    <input className="input-100" type="password" placeholder="Contraseña" name='password' id="password"></input>
                    <button className="btnAltaBus" onClick={handlerClick} >Acceder</button>
                </div>
            <Link className='registrarseLogin' to="/register">Dar Alta A Autobucito</Link>
        </form>
     );
}

export default FormRegister;