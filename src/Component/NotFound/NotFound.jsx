import React from 'react';
import notFound from "../../assets/images/notfound.jpg"
import "./style.css";

const NotFound = () => {
  return (
    <div className='notfound'>
      <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound