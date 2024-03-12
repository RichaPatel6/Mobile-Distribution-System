import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header1 from './Header1';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:9540/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <div className="text-center my-5">Loading orders...</div>;
  }

  return (
    <>
    <Header1></Header1>
    <div className="container mt-5">
      <h1 className="mb-3">Orders</h1>
      {orders.length > 0 ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td> ₹{order.totalPrice?.toFixed(2) ?? 'N/A'}</td>
                <td>
                  <ul>
                    {order.products.map((product) => (
                      <li key={product.id}>{product.name} - ₹{product.price?.toFixed(2) ?? 'N/A'}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default OrdersPage;
