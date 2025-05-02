import "../App.css";
import Food from "../assets/restauranfood.jpg";
function HomePage() {
  return (
    <div className="banner">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="yellowbutton">Reserve a table</button>
      </div>

      <img
        src={Food}
        alt="Restraurant Food"
        style={{ borderRadius: 20, width: 200, height: 200 }}
      />
    </div>
  );
}

export default HomePage;