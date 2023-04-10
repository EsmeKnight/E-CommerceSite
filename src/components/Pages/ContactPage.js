import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./ContactPage.css";

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const reasonInput = document.getElementById("reason");
const messageInput = document.getElementById("message");
const orderNumberInput = document.getElementById("order-number");
const customerNumberInput = document.getElementById("customer-number");

function ContactPage() {
  const [showOrderInputs, setShowOrderInputs] = useState(false);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [reasonTouched, setReasonTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [orderNumberTouched, setOrderNumberTouched] = useState(false);
  const [customerNumberTouched, setCustomerNumberTouched] = useState(false);

  // validators
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [reasonValid, setReasonValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [orderNumberValid, setOrderNumberValid] = useState(true);
  const [customerNumberValid, setCustomerNumberValid] = useState(true);

  const submitForm = () => {};

  const formShaper = (e) => {
    let formSetting = e.target.value;
    if (formSetting == "returns" || formSetting == "delivery") {
      setShowOrderInputs(true);
    } else {
      setShowOrderInputs(false);
    }
  };

  const validator = (e) => {
    const target = e.target.id;

    // idividual inputs
    if (target == "first-name") {
      setFirstNameTouched(true);
      if (e.target.value && firstNameTouched) {
        setFirstNameValid(true);
      } else if (e.target.value == "" && firstNameTouched) {
        setFirstNameValid(false);
      }
    }
    if (target == "last-name") {
      setLastNameTouched(true);
      if (e.target.value && lastNameTouched) {
        setLastNameValid(true);
      } else if (e.target.value == "" && lastNameTouched) {
        setLastNameValid(false);
      }
    }
    if (target == "email") {
      setEmailTouched(true);
      if (e.target.value && emailTouched) {
        setEmailValid(true);
      } else if (e.target.value == "" && emailTouched) {
        setEmailValid(false);
      }
    }
    if (target == "reason") {
      setReasonTouched(true);
      if (e.target.value && reasonTouched) {
        setReasonValid(true);
      } else if (e.target.value == "" && reasonTouched) {
        setReasonValid(false);
      }
    }
    if (target == "message") {
      setMessageTouched(true);
      if (e.target.value && messageTouched) {
        setMessageValid(true);
      } else if (e.target.value == "" && messageTouched) {
        setMessageValid(false);
      }
    }
    if (target == "order-number") {
      setOrderNumberTouched(true);
      if (e.target.value && orderNumberTouched) {
        setOrderNumberValid(true);
      } else if (e.target.value == "" && orderNumberTouched) {
        setOrderNumberValid(false);
      }
    }
    if (target == "customer-number") {
      setCustomerNumberTouched(true);
      if (e.target.value && customerNumberTouched) {
        setCustomerNumberValid(true);
      } else if (e.target.value == "" && customerNumberTouched) {
        setCustomerNumberValid(false);
      }
    }

    // check all on button click
    if (target == "contact-form-submit-button") {
      e.preventDefault();
      if (firstNameTouched == false || firstNameInput.value == null) {
        setFirstNameValid(false);
      } else {
        setFirstNameValid(true);
      }
      if (lastNameTouched == false || lastNameInput.value == null) {
        setLastNameValid(false);
      } else {
        setLastNameValid(true);
      }
      if (emailTouched == false || emailInput.value == null) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
      if (reasonTouched == false || reasonInput.value == null) {
        setReasonValid(false);
      } else {
        setReasonValid(true);
      }
      if (messageTouched == false || messageInput.value == null) {
        setMessageValid(false);
      } else {
        setMessageValid(true);
      }
      if (orderNumberTouched == false || orderNumberInput.value == null) {
        setOrderNumberValid(false);
      } else {
        setOrderNumberValid(true);
      }
      if (customerNumberTouched == false || customerNumberInput.value == null) {
        setCustomerNumberValid(false);
      } else {
        setCustomerNumberValid(true);
      }

      if (showOrderInputs) {
        if (
          firstNameValid &&
          lastNameValid &&
          emailValid &&
          reasonValid &&
          messageValid &&
          orderNumberValid &&
          customerNumberValid
        ) {
          // submit form
        }
      } else {
        if (
          firstNameValid &&
          lastNameValid &&
          emailValid &&
          reasonValid &&
          messageValid
        ) {
          // submit form
        }
      }
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-title">Contact Us</div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={submitForm}>
            <div className="contact-form-input-container">
              <label className="input-pipe">First Name *</label>
              <input
                className={
                  firstNameValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                id="first-name"
                type="text"
                onClick={validator}
                onChange={validator}
                placeholder={firstNameValid ? "" : "This field is mandatory"}
              />
            </div>
            <div className="contact-form-input-container">
              <label className="input-pipe">Last Name *</label>
              <input
                className={
                  lastNameValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                id="last-name"
                type="text"
                onClick={validator}
                placeholder={lastNameValid ? "" : "This field is mandatory"}
              />
            </div>
            <div className="contact-form-input-container">
              <label className="input-pipe">Email *</label>
              <input
                className={
                  emailValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                id="email"
                type="text"
                onClick={validator}
                placeholder={emailValid ? "" : "This field is mandatory"}
              />
            </div>
            <div className="contact-form-input-container">
              <label className="input-pipe">Contact Number</label>
              <input
                className="contact-form-input"
                id="contact-number"
                type="text"
                onClick={validator}
              />
            </div>
            <div className="contact-form-input-container">
              <label className="input-pipe">Reason for Request *</label>
              <select
                id="reason"
                className={
                  reasonValid
                    ? "contact-form-input select"
                    : "contact-form-input select invalid"
                }
                onChange={formShaper}
                onClick={validator}
              >
                <option value="" default disabled selected hidden></option>
                <option value="returns">Returning an item</option>
                <option value="delivery">Delivery and Shipping</option>
                <option value="product-information">Product Information</option>
                <option value="my-account">My Account</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="contact-form-input-container">
              <label className="input-pipe">Your message *</label>
              <input
                className={
                  messageValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                placeholder={messageValid ? "" : "This field is mandatory"}
                id="message"
                type="text"
                onClick={validator}
              />
            </div>
            <div
              className={
                showOrderInputs
                  ? "contact-form-input-container"
                  : "contact-form-input-container inactive"
              }
            >
              <label className="input-pipe">Order Number *</label>
              <input
                className={
                  orderNumberValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                placeholder={orderNumberValid ? "" : "This field is mandatory"}
                id="order-number"
                type="text"
                onClick={validator}
              />
            </div>
            <div
              className={
                showOrderInputs
                  ? "contact-form-input-container"
                  : "contact-form-input-container inactive"
              }
            >
              <label className="input-pipe">Customer Number *</label>
              <input
                className={
                  customerNumberValid
                    ? "contact-form-input"
                    : "contact-form-input invalid"
                }
                placeholder={
                  customerNumberValid ? "" : "This field is mandatory"
                }
                id="customer-number"
                type="text"
                onClick={validator}
              />
            </div>
            <button
              id="contact-form-submit-button"
              className="contact-form-submit"
              onClick={validator}
            >
              Submit
            </button>
          </form>
          <div className="contact-form-footer">
            Fields marked with * are mandatory
          </div>
        </div>
        <div className="contact-footnote">
          <div className="contact-footnote text">
            We aim to respond to all queries within 3 working days.
            Alternatively our phone hours are 9am - 5pm Monday - Friday
          </div>
        </div>
      </div>
      <div className="phone-container">
        <div className="phone-details">
          <div className="phone-header">
            <BsFillTelephoneFill className="phone-icon" />
            <div className="phone-heading">Contact by Phone</div>
          </div>
          <div className="phone-body">
            <ul className="phone-list">
              <li className="phone-list-item">
                Phone operating hours are 9am - 5pm Monday - Friday (excluding
                holidays)
              </li>
              <li>For more information call the following:</li>
              <li>0XXXXXXXXXX</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
