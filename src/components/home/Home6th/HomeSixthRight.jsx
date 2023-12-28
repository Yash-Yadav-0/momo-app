import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./HomeContact.css";

const HomeSixthRight = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    firstName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some((value) => value.trim() === '');
  
    if (isEmptyField) {
      console.log('Please fill in all fields');
    } else {
      console.log('Form submitted successfully!');
    }
  };

  const defaultCountry = "NP"; 

  return (
    <div className="home-contact-right">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <div className="form-text-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-input-field"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-text-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-input-field"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-text-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-input-field"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-text-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              defaultCountry={defaultCountry}
              className="custom-phone-input"
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                id: "phoneNumber",
                name: "phoneNumber",
                className: "form-input-field",
              }}
            />
          </div>
          <div className="form-text-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="resizeable-text-area"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          style={{
            display: "flex",
            width: "200px",
            padding: "20px 40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "100px",
            background: "var(--primary)",
            marginTop: "8px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HomeSixthRight;
