import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import "../index.css"; // ✅ correct path

export default function Placement() {
  const navigate = useNavigate();

  return (
    <>
      {/* Placement Section */}
      <section className="container-fluid py-5 mt-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src="https://scooplabs.in/assets/img/about/about-1.jpg"
                alt="Scoop Labs"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                Placement
              </span>
              <h2 className="fw-bold">About Our Placement Program</h2>
              <p className="text-secondary">
                Join the growing list of successful students who have landed their
                dream jobs through{" "}
                <strong className="text-teal">Scoop Labs</strong>. Our placement
                program connects talent with opportunity, powered by expert mentorship
                and industry partnerships.
              </p>

              <div className="row g-3">
                {[
                  {
                    icon: "bi-journal-text",
                    text: "Career Counseling",
                  },
                  {
                    icon: "bi-person-vcard",
                    text: "Resume Building",
                  },
                  {
                    icon: "bi-chat-dots",
                    text: "Mock Interviews",
                  },
                  {
                    icon: "bi-emoji-smile",
                    text: "Soft Skills Training",
                  },
                  {
                    icon: "bi-person-workspace",
                    text: "Job Matching",
                  },
                  {
                    icon: "bi-award",
                    text: "Certification",
                  },
                ].map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card shadow-sm border-0 h-100">
                      <div className="card-body d-flex align-items-center">
                        <i className={`bi ${item.icon} fs-3 text-teal me-3`}></i>
                        <h6 className="mb-0">{item.text}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 d-flex flex-wrap gap-3">
                <button
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => navigate("/contact")}
                >
                  <i className="bi bi-telephone me-2"></i>
                  Request To Call Back
                </button>
                <a href="tel:+919876543210" className="btn btn-success px-4 py-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hiring Partners Section */}
<section
  className="py-5 text-center"
  style={{
    background: "linear-gradient(135deg, #e8f5f3 0%, #f7fcfb 100%)",
  }}
>
  <div className="container">
    <h3 className="fw-bold mb-5 text-dark">
      Our Hiring Partners <span className="text-primary">✨</span>
    </h3>

    <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
      <img
        src="https://scooplabs.in/assets/img/partners/4.svg"
        alt="Coursera"
        height="40"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
        alt="Udemy"
        height="40"
      />
      <img
        src="https://scooplabs.in/assets/img/partners/6.svg"
        alt="Intercom"
        height="40"
      />
      <img
        src="https://scooplabs.in/assets/img/partners/3.svg"
        alt="HubSpot"
        height="40"
      />
      <img
        src="https://scooplabs.in/assets/img/partners/2.svg"
        alt="Coursera"
        height="40"
      />
      <img
        src="https://scooplabs.in/assets/img/partners/2.svg"
        alt="Trustpilot"
        height="40"
      />
    </div>
  </div>
</section>
{/* Testimonials Section */}
<section
  className="py-5"
  style={{
    background: "linear-gradient(135deg, #ffffff 0%, #f9fdfa 100%)",
  }}
>
  <div className="container text-center">
    <span className="badge bg-warning text-dark px-3 py-2 mb-2">
      Testimonials
    </span>
    <h2 className="fw-bold mb-5">Success Stories</h2>

    <div className="row g-4 justify-content-center">
      {/* Card 1 */}
      <div className="col-md-4">
        <div
          className="card h-100 border-0 shadow-lg p-4"
          style={{
            borderTop: "5px solid #ffea00",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://scooplabs.in/assets/img/review/ace.png"
            alt="CCP"
            className="mb-3 mx-auto"
            height="40"
          />
          <div className="mb-2 text-warning fs-5">★★★★★</div>
          <p className="text-secondary">
            Scoop Labs helped me switch careers really fast. With Manoj Kumar’s
            expert support, I landed a job in just two months! Highly
            recommended!
          </p>
          <div className="mt-auto">
            <i className="bi bi-person-circle fs-3 text-dark"></i>
            <h6 className="fw-bold mt-2 mb-0">Sarang Y.</h6>
            <p className="text-muted small mb-0">Team Lead @ CCP</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div
          className="card h-100 border-0 shadow-lg p-4"
          style={{
            borderTop: "5px solid #00a86b",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://scooplabs.in/assets/img/review/ace.png"
            alt="Drunken Monkey"
            className="mb-3 mx-auto"
            height="40"
          />
          <div className="mb-2 text-warning fs-5">★★★★★</div>
          <p className="text-secondary">
            I was stuck for months, but Scoop Labs turned everything around.
            Sachin N pushed me to grow and succeed. Now I’m working full-time!
          </p>
          <div className="mt-auto">
            <i className="bi bi-person-circle fs-3 text-dark"></i>
            <h6 className="fw-bold mt-2 mb-0">Kapur</h6>
            <p className="text-muted small mb-0">
              UX Designer @ DUKUNNEY
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div
          className="card h-100 border-0 shadow-lg p-4"
          style={{
            borderTop: "5px solid #ff3b3b",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://scooplabs.in/assets/img/review/ace.png"
            alt="ACE Designers"
            className="mb-3 mx-auto"
            height="40"
          />
          <div className="mb-2 text-warning fs-5">★★★★★</div>
          <p className="text-secondary">
            I got my first tech job right after finishing the course at Scoop
            Labs. Manoj S made learning simple and very real. Truly
            life-changing!
          </p>
          <div className="mt-auto">
            <i className="bi bi-person-circle fs-3 text-dark"></i>
            <h6 className="fw-bold mt-2 mb-0">Sachin K</h6>
            <p className="text-muted small mb-0">FE Developer @ ACE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact Placement Team Section */}
<section
  className="py-5"
  style={{
    background: "linear-gradient(135deg, #e8f8f5 0%, #f9fdfa 100%)",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Text */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="fw-bold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
          Contact Our <span style={{ color: "#ff9b30" }}>Placement</span> Team
        </h1>
        <p className="text-secondary mb-4">
          Launch your career with real-world experience at Scoop Labs.
        </p>

        <h4 className="fw-bold mb-3">Have Questions? Let’s Talk.</h4>

        <ul className="list-unstyled fs-6 text-secondary">
          <li className="mb-3">
            <i className="bi bi-envelope text-primary me-2"></i>
            info@scooplabs.in
          </li>
          <li className="mb-3">
            <i className="bi bi-telephone text-danger me-2"></i>
            +91 98444 00550
          </li>
          <li>
            <i className="bi bi-geo-alt-fill text-warning me-2"></i>
            Click Me To Find On Map
          </li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="col-lg-6">
        <div
          className="bg-white shadow-lg p-4 p-md-5 rounded-4"
          style={{ borderLeft: "5px solid #0b7d79" }}
        >
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-pill py-2"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-pill py-2"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-pill py-2"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <select className="form-select rounded-pill py-2">
                <option>Experience</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3+ Years</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn w-100 py-2 rounded-pill text-white"
              style={{ backgroundColor: "#0b7d79" }}
            >
              Send Now →
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Custom Color */}
      <style>{`
        .text-teal {
          color: #0b7d79;
        }
      `}</style>
    </>
  );
}
