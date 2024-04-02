import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import New from './components/New';
import Service from './components/Service';
import Shop from './components/Shop';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail'; 
import ProductAdd from './components/Product/ProductAdd';
import ProductEdit from './components/Product/ProductEdit';
import Cart from './components/Cart/Cart.tsx'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <New />
            <Shop />
            <Blog />
            <Service />
          </>
        } />

        <Route path="/admin" element={<ProductList />} />
        <Route path="/admin/add" element={<ProductAdd />} />
        <Route path="/admin/edit/:id" element={<ProductEdit />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
