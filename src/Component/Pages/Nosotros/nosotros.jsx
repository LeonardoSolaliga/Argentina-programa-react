import React from 'react'
import productos from "../../../assets/images/productos.jpg"
import pagos from "../../../assets/images/MetodosPagos.jpg"
import servicios from "../../../assets/images/AtencionCliente.jpg"
import "./style.css"

const nosotros = () => {
  return (
    <section className='Nosotros'>
      <h2>Un poco de nosotros</h2>
      <div className='parrafocentrado'>
        <p>
          Misiotronica es una empresa con 30 años de trayectoria en el rubro de distribución de materiales eléctricos e iluminación. Nuestra dedicación y esfuerzo está puesto en acompañar a los electricistas y todos aquellos que compran materiales eléctricos con habitualidad.</p>
        <p>
          Contamos con un equipo que está capacitado y motivado para brindarle el mejor asesoramiento personalizado, en lo técnico y comercial.
        </p>
        <p>
          Comprendimos perfectamente que el servicio que brindamos es lo que realmente compra nuestro cliente, y no simplemente materiales eléctricos, sino que es el servicio y las soluciones que necesita.
        </p>

      </div>
      <div className='serviciosydemas'>
        <div className='flex-servicios'>
          <div className='subtitutlo'>
            <h3>Precio y productos</h3>
          </div>
          <div>
            <img src={productos} alt="" />
            <div>
              <p>
                Contamos con un amplio stock en materiales eléctricos, que nos permite dar respuesta inmediata a sus requerimientos.
                Somos distribuidores oficiales de las principales marcas y contamos con precios muy competitivos
              </p>
            </div>

          </div>

        </div>
        <div className='flex-servicios'>
          <div className='subtitutlo'>
            <h3>Servicios</h3>
          </div>
          <div>
            <img src={servicios} alt="" />
            <div>
              <ul>
                <li>• Vendedores especializados</li>
                <li>• Posibilidad de realizar pedidos sin moverse de su negocio, garantizando comodidad y tranquilidad en la experiencia de compra.</li>
                <li>• Envios a todo el país.</li>
              </ul>
            </div>

          </div>

        </div>
        <div className='flex-servicios'>
          <div className='subtitutlo'>
            <h3 >Métodos de pago</h3>
          </div>
          <div>
            <img src={pagos} alt="" />
            <div>
              <ul>
                <li>• Tarjetas de crédito</li>
                <li>• Mercadopago</li>
                <li>• Transferencia</li>
                <li>• Cuenta corriente</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section >
  )
}

export default nosotros