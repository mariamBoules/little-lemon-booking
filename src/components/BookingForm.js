import { use, useState } from "react";
import "../App.css";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    props.submitForm(formData);
  };
  return (
    <form
      className="banner"
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <h1>Book Now !</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " onChange={setTime}>
        {(props.availableTimes || []).map((avTime, index) => (
          <option key={index}>{avTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e)=>setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
