import Title from "../atoms/Title";


function Personaje({name,img}) {
    return ( 
       <>
            <div>
                <img src={img} alt={name}></img>
                <div>
                    <Title msn={name}></Title>
                </div>
            </div>
        </>
     );
}

export default Personaje;