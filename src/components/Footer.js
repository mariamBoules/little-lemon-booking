import "../App.css";
import Logo from "../assets/Logo.svg";
function Footer() {
  return (
    <div className="footerNav">
      <img
        src={Logo}
        alt="Little Lemon Logo"
        style={{ width: "100px", height: "100px" }}
      />
      <div>
        <ul>
          <li>
            <p>Doorstep Navigation</p>
          </li>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/Reservations">Reservations</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone">Phone</a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Footer;
