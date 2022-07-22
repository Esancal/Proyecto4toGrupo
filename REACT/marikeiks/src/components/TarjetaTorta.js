import React from "react";
import '../styles/ProductoTorta.css'

const TarjetaTorta = ({producto}) => {
    return (
        <div className="card mx-5">
            <img src='' className="card-img-top" alt={producto.id} />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">${producto.precio}</p>
                <button className="btn btn-sm btn-outline-primary me-2">Añadir al carro</button>
            </div>
        </div>
    );
};

export default TarjetaTorta;