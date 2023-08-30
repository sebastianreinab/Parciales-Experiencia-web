import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Props from './Props'
import SecHoras from './secHoras'
import TotalPagar from './TotalPagar'
import Saludos from './Saludos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecHoras tiempo={60}/>
    <TotalPagar />
    <Saludos nombre='Jonathan'/>
  </React.StrictMode>,
)
