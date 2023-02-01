import { useState } from "react";
import Personaje from "../molecules/Personaje";
import '../../assets/styles/Personajes.css'

function ListaPersonajes() {
    const [characters, setCharacters] = useState([])
    const handlerClick = (e) =>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCharacters(data.results)
        })
    }
    return ( 
        <div >
            <h1>Lista De Personajes</h1>
            <button onClick={handlerClick}>Mostrar Personajes</button>
            <div className="CajasDeAdentro">
                {characters.map(character => <Personaje img={character.image} name={character.name}></Personaje>)}
            </div>
        </div>
     );
}

export default ListaPersonajes;