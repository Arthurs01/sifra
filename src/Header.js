import React from 'react'
import {Link} from "react-router-dom"
import './header.css'
import logo from './img/logo/logo.png'

function Header() {
  return (
    <div className='header'>
        <div className='header_flex'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
        <nav className='nav'>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
        </div>
    </div>
  )
}


export default Header