import React from "react";
import "../index.css"; // ✅ correct path

function Internship() {
  const cards = [
    {
      icon: "bi-journal-code",
      title: "Industry-Ready Curriculum",
      desc: "Courses are designed with input from top industry professionals to ensure you’re gaining in-demand, job-ready skills.",
    },
    {
      icon: "bi-play-circle",
      title: "Live Projects & Case Studies",
      desc: "Hands-on experience with real-world problems helps you stand out in interviews and show practical competence.",
    },
    {
      icon: "bi-person-badge",
      title: "Mock Interviews & Resume",
      desc: "Personalized sessions to improve your communication, confidence, and resume presentation.",
    },
    {
      icon: "bi-book",
      title: "Certification with Credibility",
      desc: "Earn recognized certifications that prove your skills, boost your credibility, and open doors across top companies and industries.",
    },
    {
      icon: "bi-mortarboard",
      title: "Dedicated Placement Support",
      desc: "Receive help with job matching, interview scheduling, and direct employer referrals through our career services team.",
    },
    {
      icon: "bi-people",
      title: "Strong Hiring Network",
      desc: "Gain access to hiring partners in tech, finance, healthcare, and more through our established recruiter ecosystem.",
    },
  ];

  return (
    <>
      {/* ============ WHY INTERN WITH US ============ */}
      <section className="py-5 bg-white mt-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Intern With Us</h2>
          <div className="row g-4">
            {cards.map((card, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm h-100 text-center p-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="bg-light d-inline-block rounded-circle p-3">
                        <i
                          className={`bi ${card.icon} fs-2 text-primary`}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <h5 className="card-title fw-semibold mb-2">
                      {card.title}
                    </h5>
                    <p className="card-text text-muted">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-carousel-section py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-5 text-white">What Our Students Say</h2>

    <div id="testimonialCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* ===== Slide 1 ===== */}
        <div className="carousel-item active">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card blue-border shadow-lg rounded-4 p-4 bg-white text-start">
                <img src="https://scooplabs.in/assets/img/review/1.jpg" alt="Arvind" className="mb-3" style={{ height: "35px" }} />
                <div className="text-warning mb-3">★★★★★</div>
                <p className="text-secondary mb-4">
                  I absolutely loved my experience at Scoop Labs. The training was hands-on and super engaging.
                  Sachin N is the best teacher I’ve ever had — honest, skilled, and very helpful.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img src="https://scooplabs.in/assets/img/review/1.jpg" alt="Ramesh" className="rounded-circle" width="55" height="55" />
                  <div>
                    <h6 className="fw-bold mb-0">Ramesh G</h6>
                    <p className="text-muted mb-0">Tech Lead @ Arvind</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="testimonial-card yellow-border shadow-lg rounded-4 p-4 bg-white text-start">
                <img src="https://scooplabs.in/assets/img/review/2.png" alt="CCP" className="mb-3" style={{ height: "35px" }} />
                <div className="text-warning mb-3">★★★★★</div>
                <p className="text-secondary mb-4">
                  Joining Scoop Labs was honestly the best decision I’ve made.
                  Manoj Kumar teaches with so much clarity and genuine patience. I actually enjoyed learning every day!
                </p>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-person-circle fs-1 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Suresh T</h6>
                    <p className="text-muted mb-0">Backend Dev @ CCP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="testimonial-card green-border shadow-lg rounded-4 p-4 bg-white text-start">
                <img src="https://scooplabs.in/assets/img/review/d2.png" alt="Drunken Monkey" className="mb-3" style={{ height: "35px" }} />
                <div className="text-warning mb-3">★★★★★</div>
                <p className="text-secondary mb-4">
                  Scoop Labs helped me grow faster and smarter. The sessions were always practical and easy to follow.
                  Ravindra Dev made sure we understood every concept clearly.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-person-circle fs-1 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Dipendar B.</h6>
                    <p className="text-muted mb-0">UX Designer @ DUKUNNEY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== (Optional) Second Slide – duplicate with different content if needed ===== */}
        <div className="carousel-item">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card blue-border shadow-lg rounded-4 p-4 bg-white text-start">
                <img src="https://scooplabs.in/assets/img/review/1.jpg" alt="Arvind" className="mb-3" style={{ height: "35px" }} />
                <div className="text-warning mb-3">★★★★★</div>
                <p className="text-secondary mb-4">
                  Great mentors, fun learning! The classes were interactive and full of insights.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-person-circle fs-1 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Priya K.</h6>
                    <p className="text-muted mb-0">Frontend Dev @ Arvind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</section>

      

      {/* ============ INTERNSHIP FORM SECTION ============ */}
      <section className="internship-section">
        <div className="internship-container">
          {/* LEFT SIDE */}
          <div className="internship-left">
            <h1>
              Join Our <span className="highlight">Internship</span> Program
            </h1>
            <p className="subtitle">
              Launch your career with real-world experience at Scoop Labs.
            </p>

            <h3 className="info-title">Quick Info List</h3>
            <ul className="info-list">
              <li>💼 Departments: Tech, Marketing, Design, HR, Sales</li>
              <li>⏱ Duration: 1-3 months</li>
              <li>💰 Stipend: Yes / No / Based on performance</li>
              <li>📍 Location: Remote / On-site at Bengaluru</li>
              <li>🧠 Learning: Real projects, mentorship, team exposures</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="internship-right">
            <form className="internship-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />

              <select required>
                <option value="">Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1year">1 Year</option>
                <option value="2years">2+ Years</option>
              </select>

              <select required>
                <option value="">Select Which One You Want To Apply</option>
                <option value="tech">Tech</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="hr">HR</option>
                <option value="sales">Sales</option>
              </select>

              <button type="submit" className="apply-btn">
                Apply Now →
              </button>
            </form>
          </div>
        </div>
      </section>



    </>
  );
}

export default Internship;
