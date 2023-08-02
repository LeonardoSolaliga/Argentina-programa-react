import React, { useState } from 'react'
import "./style.css";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  contenido: ""
};
const Contacto = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, [name]: value,
    })
  }
  const handleBlur = (e) => {
    handleChange(e);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form))
    document.getElementById('myform').reset();
  }
  const cancel = (e) => {
    e.preventDefault();
    document.getElementById('myform').reset();
  }
  return (
    <section>
      <div className='titulo-contacto'>
        <h2>Contactanos</h2>
      </div>
      <form id='myform' onSubmit={handleSubmit}>
        <div className='formularios'>
          <div className='formulario-centrar'>
            <label className='text' htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              name="nombre"
              placeholder='escribe tu nombre'
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required />

          </div>
          <div className='formulario-centrar'>
            <label className='text' htmlFor="email">E-mail: </label>
            <input
              type="email"
              name="email"
              placeholder='escribe tu email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required />
          </div>
          <div className='formulario-centrar'>
            <label className='text' htmlFor="telefono">Telefono: </label>
            <input
              type="number"
              name="telefono"
              placeholder='escribe tu telefono'
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.telefono}
              required />
          </div>
          <div className='formulario-centrar'>
            <label className='text' htmlFor="contenido">Consulta: </label>
            <textarea
              name="contenido" cols={60} rows={10}
              placeholder='escriba su consulta'
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.contenido}
            />
          </div>

          <div className='input-submit'>
            <input type="submit" value="Enviar" />
            <button id='botonCancel' onClick={cancel}>Cancelar</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contacto;