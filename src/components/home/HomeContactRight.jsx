import { useState } from "react";

const HomeContactRight = () => {
    const [formData, setFormData] = useState({
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      firstName: '',
    });
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      console.log(formData);
      e.preventDefault();
    };
    return (
      <div className="home-contact-right">
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <div style={{display:'flex',gap:'16px'}}>
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
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-text-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        </div>
        <button type="submit" style={{
          display:'flex',
          width:'256px',
          padding:'20px 40px',
          justifyContent:'center',
          alignItems:'center',
          gap:'8px',
          borderRadius:'100px',
          background:'var(--primary)',
          marginTop:'8px'
        }}>Send Message</button>
      </form>
      </div>
    );
  };

export default HomeContactRight;