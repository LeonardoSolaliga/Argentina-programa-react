import React from 'react'
import {FaPhone,FaMapLocationDot} from "react-icons/fa6"
import banner from "../../../assets/images/banner-electricidad.jpg"
import "./style.css"

const Home = () => {
  return (
    <section>
      <div className='banner'>
        
        <img src={banner} alt="" />
        <h1>Bienvenidos a MISIOTRONICA</h1>
      </div>
      <div className='direccion-tel'>
        <div>
          <FaMapLocationDot size={42}/>
          <p>direccion: Av. Constitución 1100, N3364 San Vicente, Misiones</p>
        </div>
        <div>
          <FaPhone size={42}/>
          <p>telefono: 03755832319</p>
        </div>
        
      </div>
    </section>
  )
}

export default Home
