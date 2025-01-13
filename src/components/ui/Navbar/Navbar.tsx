<<<<<<< HEAD
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
||||||| parent of a49f833 (fix merge conflict in navbar)
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
=======
import { Link } from '@tanstack/react-router';
import './Navbar.css';

const Navbar = () => {
>>>>>>> a49f833 (fix merge conflict in navbar)
	return (
		<nav className="navbar-container">
			<h1 className="text-white text-xl font-bold">🌳 EcoManager</h1>
			<div className="text-white flex gap-4">
				<a href="">Dashboard</a>
				<a href="">Resurse</a>
				<a href="">Rapoarte</a>
				<a href="" className="mr-8">
					Setari
				</a>
				<Link to="/login" className="[&.active]:font-bold">
					Login
				</Link>
			</div>
		</nav>
	);
<<<<<<< HEAD
>>>>>>> a788144 (add tanstack router)
||||||| parent of a49f833 (fix merge conflict in navbar)
>>>>>>> main
=======
>>>>>>> a49f833 (fix merge conflict in navbar)
};

export default Navbar;
