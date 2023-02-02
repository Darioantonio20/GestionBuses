import { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormLogin.css'

function FormAltaBus() {
    const navigate = useNavigate()
    const form = useRef();
    const [randomNumero, setFuncionMatematica] = useState("");
    const handlerClickNumAleatorio = (e) =>{
        e.preventDefault();
        let numLi = (Math.floor(Math.random() * (100000000 - 90000000) + 10000000));
          setFuncionMatematica(numLi)
    }
    const handlerClick = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        console.log(String(Math.floor(Math.random() * (9999 - 1000) + 1000)));

        let uri = 'http://34.225.239.102/api/autobus/register';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                clave: formData.get('clave'),
                placa: formData.get('placa'),
                numasientos: formData.get('numasientos'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nombre'),
                licencia: formData.get('licencia')
            })
        }
        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {alert(JSON.stringify(data))});

        const newForm = new FormData(form.current)
        alert(' Clave: '+ newForm.get('clave') + '  Placa: '+ newForm.get('placa') + '  Número De Asientos: ' + newForm.get('numasientos') + '  Fecha De Alta: ' + newForm.get('fecha') + '  Nombre De Chofer: ' + newForm.get('nombre') + '  Número De Licencia: ' + newForm.get('licencia') + '  Tipo: ' + newForm.get('tipo'));
        alert('Programación Web');
        alert('Maestro de los autobuses Alí Zunun');
        navigate("/");
    }
    

    return ( 
        <>
        <form ref={form} className="form-register">
                <h2 className="form__titulo">Alta Autobus</h2>
                <div className="contenedor-inputs">
                <input className="input-48" type="text" name='clave' id='clave' placeholder="Clave Autobus"></input>
                <input className="input-48" type="text" name='placa' id='placa' placeholder="Placa Autobus"></input>
                <input className="input-48" type="number" name='numasientos' id='asientos' placeholder="Número De Asientos"></input>
                <input className="input-48" type="date" name='fecha' id='fecha' placeholder="Fecha De Alta"></input>
                    <select className="input-30" name='tipo'>
                        <option value='Turismo'>Lujo</option>
                        <option value='Lujo'>Turismo</option>
                    </select>
                <input className="input-100" type="text" name='nombre' id='chofer' placeholder="Nombre Del Chofer"></input>
                <input className="input-100" type="number" name='licencia' value={randomNumero} placeholder="Número De Licencia"></input>
                <button onClick={handlerClickNumAleatorio} className="btnAltaBus">Generar número</button>
                <button onClick={handlerClick} className="btnAltaBus">Alta De Autobuses</button>
                <Link className='registrarseLogin' to="/">Volver</Link>
                </div>
            </form>
       
        </>
     );
    }

export default FormAltaBus;