import "../Footer.css";
import { Link } from "react-router-dom";

function Footer() {
	// return(<h1>Hello...!!This is the Footer component</h1>)
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h6>Account</h6>
					<ul>
						<Link to='/signin'><li style={{color: "white"}}>Sign in/ Sign Up</li></Link>
						<li>Track Order</li>
						<li>About Us</li>
						<li>Leadership</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Categories</h6>
					<ul>
						<Link to='/mobiles'><li style={{color: "white"}}>Mobiles</li></Link>
						<Link to='/tablets'><li style={{color: "white"}}>Tablets</li></Link>
						<Link to='/accessories'><li style={{color: "white"}}>Accessories</li></Link>
						<Link to='/smarttv'><li style={{color: "white"}}>Smart TV's</li></Link>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Policies</h6>
					<ul>
						<li>Privacy Policy</li>
						<li>Payment Policy</li>
						<li>Return & Refund Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Work with us</h6>
					<ul>
						<li>Siddhi Mobiles</li>
						<li>Service Centre</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Newsletter</h6>
					<div className="newsletter">
						<input type="text" placeholder="Enter your email" />
						<Link to='/enquiry'><button>Send</button></Link>
					</div>
					<div className="footer-image">
						<img src="/img2.jpg" alt="Newsletter" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
