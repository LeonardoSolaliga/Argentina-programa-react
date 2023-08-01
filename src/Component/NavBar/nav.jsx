import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/logo/logo.png"
import "./style.css"


const nav = () => {

  return (
    <>
      <header>
        <nav>
          <label htmlFor="boton-check" className='label-header'>
            <i className="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="boton-check" />
          <img src={logo} alt="logo misotronica" />
          <div className='cont-menu' id='menu'>
            <ul>
                <li>
                  <Link to="/" className='urldecoration'>Home</Link>
                </li>
                <li>
                  <Link to="/products" className='urldecoration'>Productos</Link>
                </li>
                <li>
                  <Link to="/nosotros" className='urldecoration'>Nosotro</Link>
                </li>
                <li>
                  <Link to="/contacto" className='urldecoration'>Contacto</Link>
                </li>
            </ul>
          </div>
          
        </nav>
      </header >
    </>
  )
}

export default nav