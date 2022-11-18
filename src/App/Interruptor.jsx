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
            src={darkMode ? encendido : apagado}
             alt="Interruptor"
             onClick={handleClick}>
                </img>
        </div>
    )
}

export default Interruptor;