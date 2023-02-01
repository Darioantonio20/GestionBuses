import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/Inputs.css'
import '../../assets/imgs/imgDrPepper.png'

function FormLogin() {
    //const [description, setDescription] = useState({msn: "CC", v : 1})
    //const [username, setUsername] = useState('')
    const [stateForm, setStateForm] = useState({username:'', password:''})
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        setStateForm({...stateForm,username:e.target.value})
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    return (
        <form>
            <label className='loginNombreDeUsuario'>Nombre De Usuario</label>
            <input className='inputLoginUsername' type="text" value={stateForm.username} onChange={handlerChange}/>
            <label className='loginContrasena'>Contraseña</label>
            <input className='inputLoginPassword' type="password" value ={stateForm.password} onChange={handlerChangePassword}/>
            <button className='loginBtn' onClick={handlerClick}>Enviar</button>
            <Link className='textoRegistrarme' to="/register">Registrate</Link>
{            <div>
                <label>{JSON.stringify(stateForm)}</label>
            </div>}
        </form>
      );
      //los estados son asincronos
}
export default FormLogin;