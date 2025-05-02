import "../App.css";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navigation">
      <img
        src={Logo}
        alt="Little Lemon Logo"
        style={{ width: "100px", height: "100px" }}
      />
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/orderOnline">Order Online</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
