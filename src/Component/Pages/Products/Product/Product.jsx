import React from 'react'
import "./style.css"

const Product = ({ producto }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-tumb">
          <img src={producto.imagen} alt=""/>
        </div>
        <div className="product-details">
          <h4>{producto.nombre}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
          <div className="product-bottom-details">
            <div className="product-price">${producto.precio}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product