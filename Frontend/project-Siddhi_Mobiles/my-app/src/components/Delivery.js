import React from 'react';
import '../Delivery.css'; 
import Header1 from './Header1';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Delivery = () => {
  return (
    <>
    <Header1></Header1>
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
			<div className="row border rounded-5 p-3 shadow box-area h-100 ">
				<div className="col-md-3 d-flex flex-column left-box rounded-4 ">
					<div className="card side-bar border-0">
						<img src="images/logo.jpg" className="card-img-top" alt="logo" />
						<ul className="list-group list-group-flush flex-column">
							<Link to="/dashboard" className="list-group-item">
								Dashboard
							</Link>
							<Link to="/inventory" className="list-group-item">
								Inventory
							</Link>
							<Link to="/account" className="list-group-item">
								Account
							</Link>
							<Link to="/orders" className="list-group-item">
								Order Details
							</Link>
							<Link to="/shops" className="list-group-item">
								Shop Details
							</Link>
							<Link to="/delivery" className="list-group-item">
								Delivery
							</Link>
						</ul>
					</div>
				</div>
				<div className="col-md-9 right-box">
					<div className="row details" style={{ padding: 20 }}>
						<h3>Delivery</h3>
						<br />
						<h5>Order Placed</h5>
						<div className="col">
							<div
								className="card"
								style={{ width: "35.5rem", height: "5rem" }}>
								<div className="card-body"></div>
							</div>
						</div>
						&nbsp;
						<h5>On Transit</h5>
						<div className="col">
							<div
								className="card"
								style={{ width: "35.5rem", height: "5rem" }}>
								<div className="card-body"></div>
							</div>
						</div>
						&nbsp;
						<h5>Order Delivered</h5>
						<div className="col">
							<div
								className="card"
								style={{ width: "35.5rem", height: "7rem" }}>
								<div className="card-body"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<Footer></Footer>
    </>
  );
};

export default Delivery;
