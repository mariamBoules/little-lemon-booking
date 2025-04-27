import "../App.css";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <div className="header">
      {" "}
      <img
        src={Logo}
        alt="Little Lemon Logo"
        style={{ width: "100px", height: "100px" }}
      />
      <h1>Little Lemon</h1>
    </div>
  );
}

export default Header;
