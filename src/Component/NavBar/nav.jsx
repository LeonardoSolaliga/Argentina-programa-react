import React from 'react'
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
          <a href="/"><img src={logo} alt="logo misotronica"/></a>
          <div className='cont-menu' id='menu'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href="/products">Productos</a>
              </li>
              <li>
                <a href="/nosotros">Nosotros</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>

        </nav>
      </header >
    </>
  )
}

export default nav