import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./Homepage";
import CalltoAction from "./CalltoAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/CalltoAction" element={<CalltoAction />}></Route>
      <Route path="/Chicago" element={<Chicago />}></Route>
      <Route path="/CustomersSay" element={<CustomersSay />}></Route>
      <Route path="/Specials" element={<Specials />}></Route>
    </Routes>
  );
}

export default Main;
