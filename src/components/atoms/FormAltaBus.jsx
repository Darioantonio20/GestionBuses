import { useRef } from 'react';

function FormAltaBus() {
    const form = useRef();
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
                <input className="input-100" type="number" name='licencia' placeholder="Número De Licencia"></input>
                <button onClick={handlerClick} className="btnAltaBus">Alta De Autobuses</button>
                <Link to="/register">Registrate</Link>
                </div>
            </form>
       
        </>
     );
}

export default FormAltaBus;