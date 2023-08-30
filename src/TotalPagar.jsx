import { useState } from "react";

const TotalPagar = ({value}) => {

    const[llamada, setLlamada] = useState(0)
    const[precioMayor, setPrecioMayor] = useState(0)
    const[precioMenor, setPrecioMenor] = useState(0)

    let al = llamada;
    let algo = llamada;
    const handleLlamada = () => {
        setLlamada(llamada+1)
       al = llamada; 
    }

    const handlePrecioMayor = () => {
        if(al < 3){
            setPrecioMayor(precioMayor+100)
        }else {
            
            algo = algo-3
            setPrecioMayor(precioMayor+(100+(50*algo)))
        }
        
    }
    
    /*handlePrecioMenor = () => {
        setPrecioMenor(precio+)
    }*/

    return(
        <>
            <h1>-----------------------------</h1>
            <h1>---------segundo punto-----</h1>
            <p>le da al "+1" para poner cuanto tiempo duró, si es menor o igual a 3(0,1,2,3)le suma 100
                Para ver que funciona sumandole 50 a los 100 apartir de los 3 minutos debe recargar la pagina
                .Cada vez que quira provar su funcinamiento debe recargar la pagina
            </p>
            <h3>tiempo en llamada---{"> "+llamada+" min"}</h3>
            <h3>Precio llammada----{'> '+precioMayor}</h3>
            <button onClick={() => handleLlamada()}>+1</button>
            <button onClick={() => handlePrecioMayor()}>ver precio</button>
        </>
    )

}

export default TotalPagar;