import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from 'react-router-dom';

// Componente MenuSuperior
const MenuSuperior = ({ total, productos }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  // Función para agrupar productos y contar cantidades en el detalle Carrito
  const agruparProductos = (productos) => {
    return productos.reduce((acumulador, producto) => {

      if (acumulador[producto]) {
        acumulador[producto] += 1;
      } else {
        acumulador[producto] = 1;
      }
      return acumulador;
    }, {});
  };

  // retornar los productos agrupados en el detalle Carrito
  const productosAgrupados = agruparProductos(productos);

  return (
    <div className="menu-superior">
      {/* Icono a la izquierda */}
      <nav>
        <ul>
          <li>
            <img
              src="/imagenes/supermercado.png"
              alt="Supermercado"
              className="icono-supermercado"
            />
          </li>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/detalle-carrito">Detalle</Link></li>
          <li className="carrito-texto">{productos.length} : {total}Є</li>
          <li>
            <button className="toggle-carrito" onClick={toggleCarrito}>
              🛒
            </button>
          </li>
          <li>
            {/* Carrito de productos */}
            {carritoVisible && (
              <div className="carrito-productos">
                <h4>Carrito</h4>
                {productos.length > 0 ? (
                  //conversion y renderizacion
                  // usando object.entries convertimos el objeto agrupado en un array de pares
                  // y con el map logramos iterar sobre cada par (desestructurizado en nombre y cantidad)
                  // con li key, para cada producto creamos elemento de lista que muestra cantidad y nombre
                  // o sea usamos en este caso nombre como "key" para que React identifique como único
                  <ul>
            
                    {Object.entries(productosAgrupados).map(([nombre, cantidad]) => (
                      // muestra productos asi "5x Pera 2x Manzana"
                      <li key={nombre}> {cantidad}x {nombre} </li> 
                    ))}

                  </ul>
                ) : (
                  <p>No hay productos en el carrito.</p>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuSuperior;
