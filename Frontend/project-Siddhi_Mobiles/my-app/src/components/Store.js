import React from 'react'
import '../Account.css';
import { Link } from 'react-router-dom';
import Header1 from './Header1';
import Footer from './Footer';
export default function Store() {
  return (
    <>
    <Header1></Header1>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="row border rounded-5 p-3 bg-white shadow box-area">
    <div className="col-md-3 rounded-4 d-flex  flex-column left-box">
      <div className="row">
        <div className="col-md-3">
          <div
            className="card side-bar"
            style={{ width: "13rem", border: "none" }}
          >
            <img
              src="images/logo.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: 225 }}
            />
            <ul className="list-group list-group-flush">
            <Link to='/dashboard'><li className="list-group-item">Dashboard</li></Link>
              <Link to='/inventory'><li className="list-group-item">Inventory</li></Link>
              <Link to='/account'><li className="list-group-item">Account</li></Link>
              <Link to='/orders'><li className="list-group-item">Order Details</li></Link>
              <Link to='/shops'><li className="list-group-item">Shop Details</li></Link>
              <Link to='/delivery'><li className="list-group-item">Delivery</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-9 right-box">
      <div className="head">
        <h3>Store Details</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="currentColor"
          className="bi bi-camera"
          viewBox="0 0 16 16"
        >
          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        </svg>
      </div>
      <div className="card1" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Manager Name:</li>
          <li className="list-group-item">Shop Name:</li>
          <li className="list-group-item">Shop ID:</li>
          <li className="list-group-item">Email Id:</li>
          <li className="list-group-item">Address:</li>
        </ul>
        <br />
        <div className="input-field">
          <button type="button" className="btn btn-dark btn-lg">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
    </>
  )
}
