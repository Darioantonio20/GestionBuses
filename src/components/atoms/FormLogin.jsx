import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormLogin.css'

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
        <>
        <form className="form-register">
                <h2 className="form__titulo">Login</h2>
                <div className="contenedor-inputs">
                    <input className="input-100" type="text" placeholder="Nombre De Usuario"  value={stateForm.username} onChange={handlerChange}></input>
                    <input className="input-100" type="password" placeholder="Contraseña" value ={stateForm.password} onChange={handlerChangePassword}></input>
                    <button className="btnAltaBus" onClick={handlerClick} >Alta De Autobuses</button>
                </div>
                <Link className='textoRegistrarme' to="/register">Registrate</Link>
            </form>
        </>
      );
      //los estados son asincronos
}
export default FormLogin;