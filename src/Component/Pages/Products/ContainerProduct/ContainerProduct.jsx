import React, { useEffect, useState } from 'react'
import ListProduct from '../ListProduct/ListProduct'
import productos from "../../../../data/data"
import "./style.css"

const ContainerProduct = () => {
    const [products, setProduct] = useState([]);
    const [productosBuscados,setProductosBuscados]=useState([])
    const [busqueda, setBusqueda] = useState([]);
    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }
    const filtrar = (productoBuscado) => {
        const resultadosBusqueda = productosBuscados.filter((elemento) => {
            if (elemento.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
            ) {
                return elemento;
            }else{
                return null;
            }
        });
        setProduct(resultadosBusqueda);
    }
    useEffect(() => {
        setProduct(productos)
        setProductosBuscados(productos)
    }, [])

    return (
        <main>
            <div className="containerInput">
                <input
                    value={busqueda}
                    placeholder="Búsqueda por producto"
                    onChange={handleChange}
                />
            </div>
            <ListProduct product={products} />
        </main>
    )
}

export default ContainerProduct