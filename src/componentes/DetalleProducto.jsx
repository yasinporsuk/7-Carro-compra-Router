import '../estilos/DetalleProducto.css';
import {buscarProducto} from "../herramientas/buscarProducto"
import { useParams } from 'react-router-dom';

const DetalleProducto = ({informacion}) => {  

  const producto = useParams().nombre    

  let productoInfo = buscarProducto(producto, informacion)

  return (
    <div className="container-detalle-producto">    

      {
        (productoInfo !== null) ? (        
          <h1> productoInfo.nombre : productoInfo.precioЄ <img src={productoInfo.url} alt={productoInfo.nombre} /></h1>
        ) : 
        (<h1> No existe el producto indicado</h1>)
      }
      
        
    </div>
  );
};

export default DetalleProducto ;
