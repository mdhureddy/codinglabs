import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

function ContactSection() {
  return (
    <section className="contact-section py-5 mt-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* ===== Left Content ===== */}
          <div className="col-lg-6">
            <p className="text-muted fw-semibold mb-1">
              We’d love to hear from you!
            </p>
            <h2 className="fw-bold mb-3">
              Get In <span className="text-success">Touch</span>
            </h2>
            <p className="text-secondary mb-4">
              Launch your career with real-world experience at Scoop Labs.
            </p>

            <h4 className="fw-bold mb-3">Have Questions? Let’s Talk.</h4>

            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-envelope-fill text-danger me-2"></i>
                info@scooplabs.in
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                +91 98444 00550
              </li>
              <li>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                59, 2nd Floor, VLM Towers 10th Cross Road, 2nd Stage Padmanabha
                Nagar, Banashankari, Bengaluru, Karnataka 560070
              </li>
            </ul>
          </div>

          {/* ===== Right Form ===== */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4 rounded-4">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control rounded-3"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 rounded-pill fw-semibold"
                  style={{ backgroundColor: "#007f83", border: "none" }}
                >
                  Send Now <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ===== Google Map Section ===== */}
<section className="map-section py-5" style={{ backgroundColor: "#eafaf6" }}>
  <div className="container-fluid text-center">
    <div className="row align-items-center">
      {/* Left illustration */}
      <div className="col-md-2 d-none d-md-block">
        <img
          src="/images/left-character.png"
          alt="Character Left"
          className="img-fluid"
          style={{ maxHeight: "380px" }}
        />
      </div>

      {/* Map Embed */}
      <div className="col-md-8">
        <div className="ratio ratio-16x9 rounded-4 shadow-sm overflow-hidden">
          <iframe
            title="Scoop Labs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.567569241955!2d77.55346937479377!3d12.935353487383224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d11fef35cd%3A0x67e13c17a49791b6!2sScoop%20Labs-%20Software%20Training%20Institute!5e0!3m2!1sen!2sin!4v1730476889691!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    
    </div>
  </div>
</section>

    </section>
    
  );
}

export default ContactSection;
