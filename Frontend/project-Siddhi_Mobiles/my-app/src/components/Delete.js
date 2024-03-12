import React, { useEffect, useState } from 'react';
import Header1 from "./Header1";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Delete() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9540/allproducts');
      setProducts(response.data);
    } catch (error) {
      console.error("There was an error fetching the products: ", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:9540/product/${id}`);
      fetchProducts(); 
    } catch (error) {
      console.error("There was an error deleting the product: ", error);
    }
  };

  return (
    <>
    <Header1></Header1>
    <div className="container">
        <div style={{ color: "rgb(4, 4, 10)", textAlign: "center" }}>
          <h1>List Of Product</h1>
          <Link to='/add'><button type='submit'  className="btn btn-success">Add Products</button></Link>
        </div>

        <div className="col-10 row mb-5" style={{ paddingLeft: "15%" }}>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Images</th>
                <th scope="col">Names</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td><img src={product.image} alt={product.name} style={{ width: '100px' }} /></td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>₹{product.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Delete;
