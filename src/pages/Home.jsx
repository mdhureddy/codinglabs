import { Link } from "react-router-dom";
import "../index.css"; // ✅ Ensure this path exists

function Home() {
  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <div className="scoop-container">
        {/* Left Section */}
        <div className="scoop-left">
          <div className="badge">
            ✨ EXPLORE JOB-ORIENTED IT COURSES IN BANGALORE
          </div>
          <h1>
            Best IT Training Institute In Bangalore With{" "}
            <span className="highlight">100% Placement Support</span>
          </h1>
          <p className="desc">
            Scoop Labs, a leading EdTech company in India, is among the top
            placement & training centres in Bangalore. Learn MERN Full Stack,
            Data Science & more with expert mentors and career guidance.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>100%</h3>
              <p>Placement Support</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Active Learners</p>
            </div>
            <div className="stat-card">
              <h3>97%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="scoop-right">
          <h2>
            Book Your <span className="highlight">Seat</span> Now
          </h2>
          <form className="booking-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <input type="text" placeholder="Experience" />
            <input
              type="text"
              placeholder="Programming Language Preferences?"
            />
            <button type="submit">Register Here →</button>
          </form>
        </div>
      </div>

      {/* ===================== ABOUT US SECTION ===================== */}
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          {/* 🖼️ Left Side Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="https://scooplabs.in/assets/img/about/about.jpg"
              alt="About Scoop Labs"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* 🧠 Right Side Text */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3 text-center">About Us</h2>
            <p className="lead text-justify">
              Scoop Labs is one of the most trusted placement training centres in
              Bangalore, dedicated to preparing students for successful careers in
              technology. Recognized as the best training institute in Bangalore,
              we provide career-focused, hands-on training with a curriculum
              developed by working professionals. As a leading EdTech company, our
              courses include MERN Full Stack Development, Data Science,
              Artificial Intelligence (AI), Machine Learning (ML), Java
              Programming, Web Development, and Digital Marketing. With
              internships, mock interviews, resume building, and 100% placement
              assistance, Scoop Labs ensures every student is career ready.
            </p>
          </div>
        </div>
      </div>

      {/* ===================== COURSES SECTION ===================== */}
      <div className="course-section">
        <div className="text-side">
          <h2>Pick A Course To Get Started</h2>
          <button className="explore-btn">Explore More →</button>
          
        </div>

        <div className="cards">
          {/* ---- Front-End Card ---- */}
          <div className="course-card">
            <img
              src="https://scooplabs.in/assets/img/course/3.jpg"
              alt="Front End"
            />
            <div className="course-info">
              <h3>Front-End</h3>
              <div className="rating">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <p>5.0 / 25 Rating</p>
              </div>
            </div>
          </div>

          {/* ---- MERN Card ---- */}
          <div className="course-card">
            <img
              src="https://scooplabs.in/assets/img/course/2.jpg"
              alt="MERN Stack"
            />
            <div className="course-info">
              <h3>Full stack (MERN)</h3>
              <div className="rating">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <p>4.5 / 28 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== NAVIGATION BUTTONS ===================== */}
      

      {/* ===================== CAREER PATHS SECTION ===================== */}
      <div className="career-section">
        <div className="container">
          <h2 className="section-title">
            Exploring Career Paths Through On-Site Training
          </h2>

          <div className="row align-items-center">
            {/* Left Column — Cards */}
            <div className="col-md-7">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                  <div className="card-box">
                    <div className="top-part">
                      <div className="number">1</div>
                      <div className="icon-box">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt="icon1"
                        />
                      </div>
                    </div>
                    <h5>Project-Based Learning (PBL)</h5>
                    <p>
                      Our <b>Project-Based Learning (PBL)</b> approach for{" "}
                      <b>IT training in Bengaluru</b> uses{" "}
                      <b>
                        HTML, CSS, JavaScript, React, Node.js, MongoDB, GitHub,
                        and CI/CD deployment
                      </b>{" "}
                      to build projects and make students job-ready.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                  <div className="card-box">
                    <div className="top-part">
                      <div className="number">2</div>
                      <div className="icon-box">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4149/4149680.png"
                          alt="icon2"
                        />
                      </div>
                    </div>
                    <h5>Mentorship & Guidance</h5>
                    <p>
                      Students receive <b>mentorship and career guidance</b> from{" "}
                      <b>industry professionals</b>, helping them navigate their{" "}
                      <b>IT career path</b> through structured programs with{" "}
                      <b>one-on-one feedback</b>.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                  <div className="card-box">
                    <div className="top-part">
                      <div className="number">3</div>
                      <div className="icon-box">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
                          alt="icon3"
                        />
                      </div>
                    </div>
                    <h5>Skill Development Workshops</h5>
                    <p>
                      Our <b>skill development workshops</b> ensure students learn
                      practical industry-relevant technologies through{" "}
                      <b>hands-on training</b> and real-time projects.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                  <div className="card-box">
                    <div className="top-part">
                      <div className="number">4</div>
                      <div className="icon-box">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/681/681392.png"
                          alt="icon4"
                        />
                      </div>
                    </div>
                    <h5>Career & Placement Support</h5>
                    <p>
                      Our <b>career and placement support</b> team provides{" "}
                      <b>resume building</b>, <b>interview preparation</b>, and{" "}
                      <b>job assistance</b> to help students land their dream role.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Image */}
            <div className="col-md-5 text-center mt-4 mt-md-0 position-relative">
              <div className="image-wrapper">
                <img
                  src="https://scooplabs.in/assets/img/why/2.jpg"
                  alt="Mentorship"
                  className="main-image"
                />
                <div className="call-card">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                    alt="phone"
                  />
                  <span>Call : +91 98444 00550</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section py-5">
  <div className="container">
    <div className="row g-4">
      {/* 1️⃣ Industry-Ready Curriculum */}
      <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Placement</h2>
      </div>
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-journal-code fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Industry-Ready Curriculum</h5>
          <p className="text-muted">
            Our industry-ready curriculum covers the latest technologies including HTML, CSS, JavaScript, React, Node.js, SQL, and QA fundamentals. Designed with industry inputs, the program blends theory with hands-on projects, ensuring students gain practical IT skills to stand out in interviews and succeed in software development jobs in Bangalore.
          </p>
        </div>
      </div>

      {/* 2️⃣ Live Projects & Case Studies */}
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-laptop fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Live Projects & Case Studies</h5>
          <p className="text-muted">
            Gain real experience through live IT projects and case studies that simulate workplace challenges. Our students work on practical coding tasks, MERN stack projects, and software testing scenarios to build portfolios that impress recruiters. This project-based learning (PBL) ensures graduates are job-ready for the IT industry in India.
          </p>
        </div>
      </div>

      {/* 3️⃣ Mock Interviews & Resume */}
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-person-video3 fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Mock Interviews & Resume</h5>
          <p className="text-muted">
            We provide mock interview training and resume-building support to boost confidence and communication. Learn to handle technical and HR rounds effectively while creating an ATS-friendly resume that highlights your strengths. These career-prep sessions increase your chances of landing placements in Bangalore’s top tech companies.
          </p>
        </div>
      </div>

      {/* 4️⃣ Certification with Credibility */}
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-award fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Certification with Credibility</h5>
          <p className="text-muted">
            Earn an industry-recognized IT certification that validates your technical expertise and boosts employability. Our certified software training courses in Bangalore give students credentials trusted by recruiters and hiring professionals.
          </p>
        </div>
      </div>

      {/* 5️⃣ Dedicated Placement Support */}
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-person-check fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Dedicated Placement Support</h5>
          <p className="text-muted">
            Receive help with job matching, interview scheduling, and direct employer referrals through our career services team. Our placement cell works closely with each student to guide their career aspirations.
          </p>
        </div>
      </div>

      {/* 6️⃣ Strong Hiring Network */}
      <div className="col-md-4">
        <div className="feature-card p-4 shadow-sm border-0 h-100">
          <div className="icon-wrapper mb-3">
            <i className="bi bi-people fs-2 text-success"></i>
          </div>
          <h5 className="fw-bold mb-3">Strong Hiring Network</h5>
          <p className="text-muted">
            With a recruiter network across Bangalore’s IT industry, we connect students to startups, MNCs, and product companies. Our hiring partners regularly recruit trained candidates for developer, QA, and analyst roles.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    
    <div className="newsletter-container text-white text-center my-5">
      <div className="container py-5">
        <h2 className="fw-bold mb-3">Join our Newsletter</h2>
        <p className="mb-4">Subscribe to our Newsletter to get our Latest News</p>
        <div className="newsletter-input d-flex justify-content-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="form-control w-50 rounded-start-pill px-3"
          />
          <button className="btn btn-light rounded-end-pill">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  


      {/* ===================== FAQ SECTION ===================== */}
      <section className="container my-5">
        
        <h4
  className="text-center mb-5"
  style={{ color: "#126d50ff" }} // change to any color
>
  Frequently Asked Questions
</h4>


        <div className="accordion shadow-lg rounded" id="faqAccordion">
          {[
            {
              q: "What is Scoop Labs?",
              a: "Scoop Labs is a modern tech training institute focused on hands-on learning, project-based training, and industry-relevant skills for students and IT professionals.",
            },
            {
              q: "What courses or programs do you offer?",
              a: "We offer MERN Full Stack, Data Science, Python, Java, Web Development, and other tech programs.",
            },
            {
              q: "Who can enroll in your programs?",
              a: "Anyone with a passion for technology! Whether you’re a student, fresher, or working professional.",
            },
            {
              q: "Do you offer internship opportunities?",
              a: "Yes! We provide real-world internships where students work on live projects and gain industry experience.",
            },
            {
              q: "Will I receive certification?",
              a: "Absolutely! You’ll receive a verified certificate after completing any course or internship.",
            },
            {
              q: "What makes Scoop Labs different?",
              a: "We focus on 100% practical training, mentorship, and placement support to build job-ready skills.",
            },
            {
              q: "Do you provide placement support?",
              a: "Yes! We offer 100% placement assistance, mock interviews, and hiring partner referrals.",
            },
          ].map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button fw-bold ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
