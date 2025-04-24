import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      {" "}
      <h1>Little Lemon</h1>
      <img src={Logo} alt="Little Lemon Logo" style={{width:"100px", height:"100px"}} />
    </>
  );
}

export default Header;
