import { useState } from "react"
import PropTypes from 'prop-types'

const Saludos = ({value,nombre}) => {

    const [hora, setHora] = useState(14)


    const handleHora = (value) => {
        if(hora>=6 && hora < 12) {
            console.log('Buenos dias '+nombre)
        }else if(hora >=12 && hora < 19) {
            console.log('Buenas tardes '+nombre)
        } else if(hora >= 19) {
            console.log('Buenas noches '+nombre)
        }
               
    }

    return(
        <>
            <h1>-----------------------------</h1>
            <h1>---------tercer punto-----</h1>
            <p>Aquí la hora y el nombre se ponen desde el principio, el nombre va el los props</p>
            <button onClick={()=>handleHora()}>
                cons hora
            </button>
            <h3>res---{'>'+hora+':00 horas'}</h3>
            
        </>
    )
}
Saludos.propTypes = {
    nombre: PropTypes.string.isRequired
}

Saludos.propTypes = {
    nombre: 'Jonathan'
}

export default Saludos