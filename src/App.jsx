import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import DetalleCarrito from './componentes/DetalleCarrito'

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import DetalleProducto from './componentes/DetalleProducto';
import useStorageState from './servicios/UseStorageState';


function App() {
  
  const informacion = [ 
    { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];

 

  const [total, setTotal] = useStorageState(0); // Estado para el importe total
  const [productos, setProductos] = useStorageState([]); // Lista de productos del carrrito

  LocalStorageServicio.set("productos" , productos)

  return (

    
    <div className="App">
      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productos={productos}
                  />
      </header>
      <main>
      <Routes>
            {/* Ruta principal con ListaImagenes */}
            <Route 
              path="/" 
              element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos} informacion={informacion}/>} 
            />
            
            {/* Detalle del carrito de la compra */}
            <Route path="/detalle-carrito" element={<DetalleCarrito productos={productos} informacion={informacion}/>} />

            <Route path="/producto/:nombre" element={<DetalleProducto informacion={informacion}/>} />
            
            <Route path="*" element={<Pagina404 />} />

            

          </Routes>
      </main>
    </div>
  
  );
}

export default App
