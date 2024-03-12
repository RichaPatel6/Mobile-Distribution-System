import React from "react";
import { Link } from "react-router-dom";
import Header1 from "./Header1";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <Header1></Header1>
      <div className="container mt-5">
        <div className="card border-0 shadow">
          <div className="card-header"><b>Dashboard</b></div>
          <div className="card-body justify-content-center">
            <form>
              <div className="row">
                  <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">To Add Products</label>
                    <Link to='/add'><button className="btn btn-primary">Add Products</button></Link>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">To Delete Products</label>
                    <Link to='/delete'><button className="btn btn-primary">Delete Products</button></Link>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">To see Orders</label>
                    <Link to='/orders'><button className="btn btn-primary">Orders</button></Link>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Dashboard;
