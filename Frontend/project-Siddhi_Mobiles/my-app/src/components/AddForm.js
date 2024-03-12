import React, { useState } from "react";
import axios from "axios";
import Header1 from "./Header1";
import Footer from "./Footer";

export default function AddForm() {
  const [productData, setProductData] = useState({
    product_name: "",
    product_price: "",
    product_description: "",
    product_quantity: "",
    category_id: "",
    supplier_id: "",
  });
  const [productImage, setProductImage] = useState(null);
  const [feedback, setFeedback] = useState(""); // To provide user feedback

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.product_name);
    formData.append("description", productData.product_description);
    formData.append("price", productData.product_price);
    formData.append("quantityInStock", productData.product_quantity);
    formData.append("categoryId", productData.category_id);
    formData.append("supplierId", productData.supplier_id);

    if (productImage) {
      formData.append("image", productImage);
    }

    try {
      const response = await axios.post("http://localhost:9540/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setFeedback("Product successfully added!");
      alert("Product successfully added!");
    } catch (error) {
      alert("Please fill required fields");
      console.error("Error posting product data:", error.response ? error.response.data : error.message);
      setFeedback("Error adding product. Please try again.");
    }
  };


  return (
    <>
      <Header1></Header1>
      <div className="container mt-5">
        <div className="card border-0 shadow">
          <div className="card-header"><b>Add Product</b></div>
          <div className="card-body">
            {feedback && <div className="alert alert-warning">{feedback}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" name="product_name" required value={productData.product_name} onChange={handleInputChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_price" className="form-label">Product Price</label>
                    <input type="number" className="form-control" name="product_price" value={productData.product_price} onChange={handleInputChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_description" className="form-label">Product Description</label>
                    <textarea className="form-control" name="product_description" value={productData.product_description} onChange={handleInputChange}></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" name="product_quantity" value={productData.product_quantity} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="category_id" className="form-label">Category ID</label>
                    <select className="form-select" name="category_id" required value={productData.category_id} onChange={handleInputChange}>
                      <option value="">Select Category</option>
                      <option value="1">Mobiles</option>
                      <option value="2">Tablets</option>
                      <option value="3">Accessories</option>
                      <option value="4">SmartTV</option>
                      <option value="5">Latest Product</option>
                      <option value="6">Popular Product</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="supplier_id" className="form-label">Supplier ID</label>
                    <select className="form-select" name="supplier_id" required value={productData.supplier_id} onChange={handleInputChange}>
                      <option value="">Select Supplier</option>
                      <option value="1">Samsung</option>
                      <option value="2">Apple</option>
                      <option value="3">Xiaomi</option>
                      <option value="4">Oneplus</option>
                      <option value="5">Vivo</option>
                      <option value="6">Oppo</option>
                      <option value="7">Boat</option>
                      <option value="8">Noise</option>
                      <option value="9">Realme</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_image" className="form-label">Add Image</label>
                    <input type="file" className="form-control" name="product_image" onChange={handleFileChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
