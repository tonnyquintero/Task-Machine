import React, { useContext } from "react";
import encendido from '../img/lightswitch-on.png';
import apagado from '../img/lightswitch-off.png';
import { ThemeContext } from "../Context/ThemeContext";
import './App.css'

function Interruptor() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="interruptor">
            <img
            src={darkMode ? apagado : encendido}
             alt="Interruptor"
             onClick={handleClick}>
                </img>
            <h2 className={darkMode ? 'darkH2' : 'lightH2'}>{darkMode ? 'Apaga' : 'Enciende'} el interruptor para 
            {darkMode ? ' Modo Claro 💡' : ' modo Oscuro 🔦'}</h2>
        </div>
    )
}

export default Interruptor;