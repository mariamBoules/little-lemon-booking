import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";
import { useDefaultProps } from "@mui/material/DefaultPropsProvider";

const mockSubmitForm = jest.fn();

const defaultProps = {
  availableTimes: ["17:00", "18:00"],
  submitForm: jest.fn(),
};


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

test("Booking date entered", async () => {
  render(<BookingForm {...defaultProps} />);
  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: "" },
  });
  fireEvent.click(submitButton);

  const errorMessage = await screen.findByText("Required");
  expect(errorMessage).toBeInTheDocument();
});

test("guests min 1", async () => {
  render(<BookingForm {...defaultProps} />);
  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });

  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "0" },
  });
  fireEvent.click(submitButton);

  const errorMessage = await screen.findByText("Required");
  expect(errorMessage).toBeInTheDocument();
});

test("guests max 10", async () => {
  render(<BookingForm {...defaultProps} />);
  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });

  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "11" },
  });
  fireEvent.click(submitButton);

  const errorMessage = await screen.findByText("Required");
  expect(errorMessage).toBeInTheDocument();
});

test("updates guests value on user input", () => {
  render(<BookingForm {...defaultProps} />);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "5" } });

  expect(guestsInput).toHaveValue(5);
});

