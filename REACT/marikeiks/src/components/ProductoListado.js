import React, { useState, useEffect, useCallback } from "react";
import TarjetaTorta from "./TarjetaTorta";
import getAll from "../services/ProductoService";
import DireccionamientoFAQ from "./DireccionamientaFAQ";
import "../styles/ProductoTorta.css";
import "../styles/InicioStyle.css";
import { useNavigate } from "react-router-dom";


const initialProductos = [
  {
    id: 0,
    nombre: "",
    descripcion: "",
    stock: 0,
    precio: 0,
    vegano: 0,
    tipoProducto: 0,
    decoracion: 0,
    sabor: 0,
    cantidad: 0,
  },
];

const ProductoListado = () => {
  const [productos, setProductos] = useState(initialProductos);

  const obtenerProductos = async () => {
    setProductos(await getAll());
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/contacto', { replace: true }, [navigate]))

  return (
    <div className="p-0 fondo">
      <div className="pt-3">
        <h1 className="titulo_productos">Nuestros productos</h1>
        <p className="texto1">Para comenzar, elija su producto favorito.</p>
      </div>
      <div className="row row-cols-4 row-cols-lg-6 g-6 g-lg-6 px-3">
        {productos.map((producto) => (
          <TarjetaTorta key={producto.id} producto={producto} />
        ))}
      </div>
      <br />
      <div className="text1">
        <p>¿Buscas algo diferente? Póngase en contacto con nosotros <a className="hoverbtn" onClick={handleOnClick}>aquí</a> para un pedido a medida.</p>
      </div>
      <br/>
      <br/>
      <DireccionamientoFAQ />
    </div>
  );
};

export default ProductoListado;
