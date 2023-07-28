import React, { useState } from "react";

const Newsletter = () => {
  const [emailid, setemailid] = useState("");
  const [message, setMessage] = useState("");

  const getEmailid = (e) => {
    e.preventDefault();
    if (emailid.trim() === "") {
      setMessage("Please Enter your Email ID");
    } else {
      setMessage(emailid + " Subscribed successfully");
      setTimeout(() => {
        setMessage("");
      }, 10000);
    }
  };

  return (
    <section className="container newsletter">
      <div className="newsletter-card">
        <h3 className="newsletter-title">Subscribe Our Newsletter</h3>
        <p className="newsletter-subtitle">Get the latest information</p>
        <form action="">
          <div className="form-group">
            <input
              type="email"
              className="form-control form-input"
              placeholder="Enter your email address"
              onChange={(e) => setemailid(e.target.value)}
            />
            <button
              onClick={getEmailid}
              className="btn btn-primary newsletter-button"
            >
              Subscribe
            </button>
          </div>
          <div className="newsletter-subtitle">
            {message && <p className="alert alert-danger">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
