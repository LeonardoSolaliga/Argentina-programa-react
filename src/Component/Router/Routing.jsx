import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../NavBar/nav.jsx';
import ContainerProduct from '../Pages/Products/ContainerProduct/ContainerProduct.jsx';
import NotFound from "../NotFound/NotFound.jsx"
import Footer from '../Footer/Footer.jsx';

const Routing= () => {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="products" element={<ContainerProduct />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
  )
}

export default Routing;