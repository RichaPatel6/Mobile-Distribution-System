import React from 'react'
import '../Enquiry.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Enquiry() {
  return (
    <>
      <div className="container mt-5">
    <h2 className="text-center">Mobile Distributor Enquiry</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="shop" className="form-label">
          Shop Name
        </label>
        <input
          type="text"
          className="form-control"
          id="shop"
          placeholder="Enter your Shop name"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="Enter your phone number"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows={3}
          placeholder="Enter your message"
          required=""
          defaultValue={""}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
<Footer></Footer>
    </>
  )
}
export default Enquiry