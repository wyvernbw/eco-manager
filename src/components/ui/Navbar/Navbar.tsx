<<<<<<< HEAD
import "./Navbar.css";
import { Button } from "@/components/ui/button";
||||||| parent of a788144 (add tanstack router)
import "./Navbar.css";
=======
import { Link } from '@tanstack/react-router';
import './Navbar.css';
>>>>>>> a788144 (add tanstack router)

const Navbar = () => {
<<<<<<< HEAD
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
||||||| parent of a788144 (add tanstack router)
  return (
    <nav className="navbar-container">
      <h1>EcoManager</h1>
      <div>
        <a href="">Dashboard</a>
        <a href="">Resurse</a>
        <a href="">Rapoarte</a>
        <a href="">Setari</a>
      </div>
    </nav>
  );
=======
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
>>>>>>> a788144 (add tanstack router)
};

export default Navbar;
