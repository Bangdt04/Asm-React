import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const addToCartHandler = () => {
    window.location.href = '/checkout';
  }


  const product = {
    name: 'Asgaard sofa',
    price: '25.000.000đ',
    image: '/images/Group 146.png',
  };

  return (
    <div className="container">
      <main className="main">
        <div className="box-left">
          <table>
            <thead>
              <tr>
                <th style={{ width: '15%' }}></th>
                <th style={{ width: '15%' }}>Product</th>
                <th style={{ width: '20%' }}>Price</th>
                <th style={{ width: '20%' }}>Quantity</th>
                <th style={{ width: '10%' }}>Subtotal</th>
                <th style={{ width: '10%' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td style={{ color: '#9F9F9F' }}>{product.name}</td>
                <td style={{ color: '#9F9F9F' }}>{product.price}</td>
                <td>1</td>
                <td>{product.price}</td>
                <td><i className="fa-solid fa-trash" style={{ color: 'red' }}></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-right">
          <div className="title">
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Cart Totals</h2>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <h2>{product.name}</h2>
          </div>
          <div className="total">
            <p>Total</p>
            <p>Price: {product.price}</p>
          </div>
          <Link to="/checkout">
            <p onClick={addToCartHandler}>Check out</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Cart;
