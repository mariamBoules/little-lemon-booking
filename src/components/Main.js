import "../App.css";
import { useReducer} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./Homepage";
import CalltoAction from "./CalltoAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from '../api';


export const updateTimes = (selectedDate) => {
  return fetchAPI(selectedDate);
};
export const initializeTimes = () => {
  
  const date = new Date();
  return fetchAPI(date);
};
function Main() {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

const submitForm = (formData) =>{
  const submitted = submitAPI(formData)
  if(submitted)
    navigate("/confirmedBooking")
}

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/booking"
        element={<BookingPage availableTimes={availableTimes} submitForm={submitForm}/>}
      ></Route>
      <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
      <Route path="/CalltoAction" element={<CalltoAction />}></Route>
      <Route path="/Chicago" element={<Chicago />}></Route>
      <Route path="/CustomersSay" element={<CustomersSay />}></Route>
      <Route path="/Specials" element={<Specials />}></Route>
    </Routes>
  );
}

export default Main;
