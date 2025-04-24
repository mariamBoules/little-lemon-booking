import Logo from "../assets/Logo.svg";
function Footer() {
    return(
  <>
    <img
      src={Logo}
      alt="Little Lemon Logo"
      style={{ width: "100px", height: "100px" }}
    />
    <ul>
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
  </>
    );
}

export default Footer;
