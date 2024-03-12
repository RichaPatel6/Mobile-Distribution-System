import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Home.css";
import Header1 from "./Header1";
import Footer from "./Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
    <Header1></Header1>
    <div class="container-xl-fluid justify-content-center">
      <div className="row mt-2 mb-2border border-primary">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://ssmobile.com/in/assets/img/category/Samsung-Banner.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://ssmobile.com/in/assets/img/slider/1+-12.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row text-center">
        <h2 className="text-center heading1 mt-3 mb-3">Trending Categories</h2>
        <div class="col-xl-3">
        <img
            src="https://ssmobile.com/in/assets/img/category/4-4.png"
            className="i1 tc-category"
            alt=".."
          />
          <h5>Mobiles</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://ssmobile.com/in/assets/img/category/3-3.png"
            className="i2 tc-category"
            alt=".."
          />
          <h5>Tablets</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://ssmobile.com/in/assets/img/category/1-1_1.png"
            className="i3 tc-category"
            alt="..."
          />
          <h5>Smart TVs</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://ssmobile.com/in/assets/img/category/2-2.png"
            className="i4 tc-category"
            alt="..."
          />
          <h5>Accessories</h5>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h2 className="text-start heading1">Latest Product</h2>
        {filterProductsByCategory(5).map((item) => (
          <div className="col-xl-3">
            <div className="card" c1>
              <img
                src={getImagePath(item.image)}
                class="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                  <br />
                  ₹{item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <img
          src="https://images.samsung.com/is/image/samsung/assets/my/smartphones/galaxy-z-fold4/images/Samsung-CareP-KV-Carousel_PC_disclaimer_O_fold.jpg"
          className="img7 mt-3 mb-3"
          alt="i5"
        />
      </div>

      <div className="row text-center mt-5">
        <h2 className="text-start heading1">Popular Product</h2>
        <div className="row">
          {filterProductsByCategory(6).map((item) => (
            <div className="col-xl-3">
              <div className="card" c1>
                <img
                  src={getImagePath(item.image)}
                  class="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.description}
                    <br />
                    ₹{item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer></Footer>

    </>
    );
}
