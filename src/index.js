/*################
        Importaciones
##################*/

// Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Estilos
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Componentes
import CartProvider from './components/context/cartContext';
// import App from './App';
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';  
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
import AboutUs from './components/aboutUs/AboutUs';

// Core
import reportWebVitals from './reportWebVitals';


/*################
        Logica
##################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/productos' element = {<ItemListContainer greeting = "Estamos en itemlist"/>} />
          <Route path = '/productos/:productoId' element = {<ItemDetailContainer/>} />
          <Route path= '/carrito' element = {<Cart/>} />
          <Route path = '/nosotros' element = {<AboutUs/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
