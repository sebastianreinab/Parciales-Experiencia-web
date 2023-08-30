import PropTypes from 'prop-types'
import { useState } from 'react'


const SecHoras = ({value}) => {

    const[horas, setHoras] = useState(7200)
    const[minutos, setMinutos] = useState(7200)
    const[segundos, setSegundo] = useState(7200)

    //tiempo = document.getElementById('')
    let ti;

    const convSec = () => {
        setSegundo(segundos)    
    }
    const convMin = () => {
        setMinutos(minutos/60)
    }
    const convHor = (value) => {
        setHoras(horas/3600)    
    }

    return(
        <>
        <h1>-----------------------------</h1>
            <h1>---------Primer punto punto-----</h1>
        <p>El tiempo en segundos se pone desde el principio, en este caso 7200 segundo</p>
        <h2>horas: {horas}</h2>
        <h2>minutos: {minutos}</h2>
        <h2>segundos: {segundos}</h2>
            <button onClick={ ()=>convHor()}>
                convertir horas
            </button>
            <button onClick={ ()=>convMin()}>
                convertir minutos
            </button>
            <button onClick={ ()=>convSec()}>
                convertir segundos
            </button>
        </>
    )
}
SecHoras.propTypes = {
    tiempo: PropTypes.number.isRequired
}
SecHoras.defaultProps = {
    tiempo: 61
}
export default SecHoras;