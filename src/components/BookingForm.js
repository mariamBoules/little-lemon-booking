import { use, useState } from "react";
import "../App.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm(props) {
  const bookingSchema = Yup.object().shape({
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number()
      .required("Required")
      .min(1, "Minimum one guest")
      .max(10, "Maximum 10 guests"),
    occasion: Yup.string().required("Required"),
  });

  return (
    <div className="FormBanner">
      <Formik
        initialValues={{
          date: "",
          time: (props.availableTimes && props.availableTimes[0]) || "",
          guests: "1",
          occasion: "Birthday",
        }}
        validationSchema={bookingSchema}
        onSubmit={(values) => {
          // same shape as initial values
          props.submitForm(values);
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="form-wrapper"
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <h1>Book Now !</h1>
            <label htmlFor="res-date">Choose date</label>
            <Field
              type="date"
              id="res-date"
              name="date"
              className={errors.date && touched.date ? "input-error" : ""}
            />
            <ErrorMessage name="date" component="div" className="error" />
            <label htmlFor="res-time">Choose time</label>
            <Field as="select" id="res-time" name="time" className="selects">
              {(props.availableTimes || []).map((avTime, index) => (
                <option key={index}>{avTime}</option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error" />

            <label htmlFor="guests">Number of guests</label>
            <Field
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
            />
            <ErrorMessage name="guests" component="div" className="error" />
            <label htmlFor="occasion">Occasion</label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              className="selects"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error" />
            <input
              className="yellowbutton"
              type="submit"
              value="Make Your reservation"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;
