import { Link } from '@tanstack/react-router';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<h1>EcoManager</h1>
			<div>
				<Link to="/login" className="[&.active]:font-bold">
					Login
				</Link>
				<a href="">Dashboard</a>
				<a href="">Resurse</a>
				<a href="">Rapoarte</a>
				<a href="">Setari</a>
			</div>
		</nav>
	);
};

export default Navbar;
