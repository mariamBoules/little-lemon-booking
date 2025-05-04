import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now !");
  expect(headingElement).toBeInTheDocument();
});

test("testing initialize times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("testing update times", () => {
  const testDate = new Date("2025-05-03");
  const times = updateTimes(testDate);
  expect(times.length).toBeGreaterThan(0);
});
