import React, { useEffect, useState } from 'react';
import Header1 from "./Header1";
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddCart() {
    const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9540/product/{id}');
      setProducts(response.data);
    } catch (error) {
      console.error("There was an error fetching the products: ", error);
    }
  };

  const addProduct = (product) => {
    const isProductInCart = cart.find(item => item.id === product.id);
    if (!isProductInCart) {
      setCart([...cart, product]);
    } else {
      console.log("Product is already in the cart");
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:9540/orders', {
        products: cart.map(item => item.id), 
      });
      console.log("Order placed successfully", response.data);
      setCart([]); 
    } catch (error) {
      console.error("There was an error placing the order: ", error);
    }
  };
  
  
  return (
    <>
    <Header1></Header1>
      <div className="container">
        <div style={{ color: "rgb(4, 4, 10)", textAlign: "center" }}>
          <h1>List Of Product</h1>
        </div>

        <div className="col-10 row mb-5" style={{ paddingLeft: "15%" }}>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Names</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className='btn btn-success' onClick={handleClick}>Place Order</button>
        </div>
      </div>
    </>
  );
}

export default AddCart;
