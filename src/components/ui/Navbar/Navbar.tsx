<<<<<<< HEAD
import "./Navbar.css";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1 className="app-name">EcoManager</h1>
      <div className="nav-container">
        <div className="link-container">
            <a href="" className="nav-link">Dashboard</a>
            <a href="" className="nav-link">Resurse</a>
            <a href="" className="nav-link">Rapoarte</a>
            <a href="" className="nav-link">Setari</a>
        </div>
        <Button variant="outline">Login</Button>
      </div>
    </nav>
  );
=======
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
>>>>>>> main
};

export default Navbar;
