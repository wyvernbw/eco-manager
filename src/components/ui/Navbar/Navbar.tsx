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
};

export default Navbar;
