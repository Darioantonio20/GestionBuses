import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/Inputs.css'


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
        alert('Nombre: '+ newForm.get('name') + 'UserName: '+ newForm.get('userName') + 'Password: '+ newForm.get('password'));
    }
   
    return ( 

        <form ref={form}>
        <div>
        <label  className="registroNombreCompleto" htmlFor="name">Nombre Completo</label>
            <input className='inputNombreCompleto' type="text" name='name' id="name"/>
        </div>
        <div>
            <label  className="registroNombreDeUsuario">Nombre De Usuario
                <input /*ref={username}*/className='inputNombreDeUsuario' name='userName' type="text" />
            </label>
        </div>
        <div>
        <label  className="registroCorreoElectronico" htmlFor="name">Correo Eléctronico</label>
            <input className='inputCorreo' type="text" name='name' id="name"/>
        </div>
        <div>
        <label  className="registroContraseña">Contraseña</label>
            <input /*ref={password}*/ className='inputContrasena'  name='password' type="password" />
            <button className='btnRegistroEnviar' onClick={handlerClick}>Registro</button>
        </div>
        </form>
     );
}

export default FormRegister;