import "../App.css";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  return (
    <BookingForm availableTimes = {props.availableTimes} submitForm = {props.submitForm}/>
  );
}

export default BookingPage;