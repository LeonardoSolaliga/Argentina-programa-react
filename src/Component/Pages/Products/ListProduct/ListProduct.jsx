import React from 'react'
import Product from '../Product/Product.jsx'
import "./style.css";

const ListProduct = ({product}) => {
  console.log(product)
  return (
    <div  className='flexproductos'>{product.map(Productos=>{
      return <Product key={Productos.id} producto={Productos} />
   })}</div>
  )
}

export default ListProduct