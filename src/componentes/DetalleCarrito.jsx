import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';

const DetalleCarrito = ({ productos, informacion }) => {
  
  // Función para buscar información de un producto por su nombre
  function buscarProducto(nombre) {
    return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
  }

  // Calcular el total sumando los precios de todos los productos seleccionados
  const totalPrecio = productos.reduce((total, producto) => {
    const productoInfo = buscarProducto(producto);
    return productoInfo ? total + productoInfo.precio : total;
  }, 0);

  return (
    <div className="container-detalle">
      <ul> 
        <h2> Productos Seleccionados </h2>
        {
          productos.map((producto, index) => {
            let productoInfo = buscarProducto(producto);         
            return (
              <li key={index}>
                {producto} : {productoInfo ? productoInfo.precio : 'N/A'}Є
                <Link to={`/producto/${productoInfo ? productoInfo.nombre : ''}`}>
                  <img src={productoInfo ? productoInfo.url : ''} alt={producto} />
                </Link>
              </li>
            )
          })
        }
      
        <li className='total'>Número de Elementos: {productos.length}</li>
        <li className='total'>Total: {totalPrecio}Є</li> {/* Aquí se muestra el total */}
      </ul>
    </div>
  );
};

export default DetalleCarrito;
