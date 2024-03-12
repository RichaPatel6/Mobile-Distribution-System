import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import "../Header.css";
import { useEffect, useState } from "react";

const Header = () => {
	const [authenticated, setAuthenticated] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isUser, setIsUser] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const auth = Cookies.get('authenticated') === 'true';
		const ADMIN = Cookies.get('isAdmin') === 'true';
		const USER = Cookies.get('isUser') === 'true';
		setAuthenticated(auth);
		setIsAdmin(ADMIN);
		setIsUser(USER);
	},[]);

	const handleLogout = () => {
		Cookies.remove('authenticated');
		Cookies.remove('isAdmin');
		Cookies.remove('isUser');
		setAuthenticated(false);
		setIsAdmin(false);
		setIsUser(false);
		navigate('/signin')
		
	};

	return (
		<nav className="navbar">
			<div className="image-container">
				<img className="image" src="/img2.jpg" alt="Logo" />
			</div>

			{(authenticated && isAdmin) ? (
			<>
			<ul className="nav-list">
				<li className="nav-item">
					<Link className="nav-link active" to="/home">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" to="/dashboard">
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" to="/delivery">
						Delivery
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" to="/orders">
						Orders
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" to="/store">
						Store
					</Link>
				</li>
			</ul>
			</>) : (
				<>
				{authenticated && isUser ? (
					<ul className="nav-list">
					<li className="nav-item">
						<Link className="nav-link active" to="/home">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/mobiles">
							Mobiles
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/accessories">
							Accessories
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/tablets">
							Tablets
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/SmartTv">
							SmartTv
						</Link>
					</li>
				</ul>
			) : (
				<ul className="nav-list">
				<li className="nav-item">
					<Link className="nav-link active" to="/home">
						Home
					</Link>
				</li>
			</ul>
				)}
			</>
		)}
			<div className="icons">
				<FaShoppingCart className="icon" />
				<FaHeart className="icon" />
				{authenticated ? (
					<Link to="/signin"><FaUser className="icon" onClick={handleLogout}/><span>Logout</span></Link>
				) : (
					<Link to="/signin"><FaUser className="icon"/><span>Login</span></Link>
					)}

			</div>
		</nav>
	);
}
export default Header;
