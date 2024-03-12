import React, { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "./Header2";
import Footer from "./Footer";

export default function SmartTv () {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); 

  useEffect(() => {
    axios
      .get("http://localhost:9540/allproducts")
      .then((response) => {
        setProducts(response.data);
        console.log("Products fetched:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const getImagePath = (imageFullPath) => {
    const imageName = imageFullPath.split('\\').pop();
    return `/images/${imageName}`;
  };

  const filterProductsByCategory = (categoryId) => {
    return products.filter(product => product.category.categoryId === categoryId);
  };

  const placeOrder = (product) => {
    const quantity = quantities[product.id] || 1;
    const totalPrice = product.price * quantity;

    const orderData = {
      orderDate: new Date().toISOString(),
      status: "NEW",
      totalPrice: totalPrice,
      products: [product]
    };

    axios.post("http://localhost:9540/orders", orderData)
      .then(response => {
        console.log("Order placed successfully", response.data);
        const newQuantities = { ...quantities };
        delete newQuantities[product.id]; 
        setQuantities(newQuantities);
      })
      .catch(error => {
        console.error("Error placing order", error);
      });
  };
    return (
    <>
    <Header2></Header2>
    <div class="container-xl-fluid justify-content-center">
      <div className="row">
        <img
          src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/06/Wondertainment_1200x628.jpg"
          className="img7 mt-3 mb-3"
          alt=".."
        />
      </div>
      <div className="row text-center mt-5">
      {filterProductsByCategory(4).map((item) => (
          <div className="col-xl-3" key={item.id}>
            <div className="card">
              <img src={getImagePath(item.image)} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                  <br />
                  ₹{item.price}
                </p>
                <input
                  type="number"
                  value={quantities[item.id] || 1}
                  onChange={(e) => setQuantities({ ...quantities, [item.id]: parseInt(e.target.value, 10) || 1 })}
                  min="1"
                  className="form-control mb-2"
                  style={{ width: "60%", margin: "0 auto" }}
                />
                <button className="btn btn-danger w-75" onClick={() => placeOrder(item)}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
  </div>
      </div>
      <Footer></Footer>
    </>
  );
}


