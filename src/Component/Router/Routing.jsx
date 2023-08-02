import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/nav.jsx';
import Home from "../Pages/Home/Home.jsx"
import ContainerProduct from '../Pages/Products/ContainerProduct/ContainerProduct.jsx';
import Nosotros from "../Pages/Nosotros/nosotros.jsx"
import Contacto from "../Pages/Contacto/Contacto.jsx";
import NotFound from "../NotFound/NotFound.jsx"
import Footer from '../Footer/Footer.jsx';

const Routing= () => {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="Nosotros" element={<Nosotros />}/>
      <Route path="Products" element={<ContainerProduct />}/>
      <Route path="Contacto" element={<Contacto />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
  )
}

export default Routing;