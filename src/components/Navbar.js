import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Databáze knih</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="navbar-link" to="/">Seznam knih</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-link" to="/create">Přidat knihu</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
