import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"; // ✅ correct path

function ITTraining() {
  return (
    <section className="py-5 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row g-4">

          {/* HTML Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                className="card-img-top rounded-top-4"
                alt="HTML Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    width="30"
                    className="me-2"
                    alt="HTML Icon"
                  />
                  <h5 className="fw-bold mb-0">HTML</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-muted">5.0 / 26 Rating</p>
              </div>
            </div>
          </div>

          {/* CSS Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
                className="card-img-top rounded-top-4"
                alt="CSS Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    width="30"
                    className="me-2"
                    alt="CSS Icon"
                  />
                  <h5 className="fw-bold mb-0">CSS</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-muted">5.0 / 28 Rating</p>
              </div>
            </div>
          </div>

          {/* JS Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                className="card-img-top rounded-top-4"
                alt="JavaScript Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    width="30"
                    className="me-2"
                    alt="JS Icon"
                  />
                  <h5 className="fw-bold mb-0">JS</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="text-muted">4.5 / 24 Rating</p>
              </div>
            </div>
          </div>

          {/* React Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                className="card-img-top rounded-top-4"
                alt="React Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    width="30"
                    className="me-2"
                    alt="React Icon"
                  />
                  <h5 className="fw-bold mb-0">React</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-muted">5.0 / 27 Rating</p>
              </div>
            </div>
          </div>
<div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://scooplabs.in/assets/img/course/5.jpg"
                className="card-img-top rounded-top-4"
                alt="HTML Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://scooplabs.in/assets/img/course/all/angular.png"
                    width="30"
                    className="me-2"
                    alt="HTML Icon"
                  />
                  <h5 className="fw-bold mb-0">Angular</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-muted">5.0 / 26 Rating</p>
              </div>
            </div>
          </div>

          {/* CSS Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://scooplabs.in/assets/img/course/6.jpg"
                className="card-img-top rounded-top-4"
                alt="CSS Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://scooplabs.in/assets/img/course/all/db.png"
                    width="30"
                    className="me-2"
                    alt=""
                  />
                  <h5 className="fw-bold mb-0">SQL</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="text-muted">5.0 / 28 Rating</p>
              </div>
            </div>
          </div>

          {/* JS Card */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="https://scooplabs.in/assets/img/course/1.jpg"
                className="card-img-top rounded-top-4"
                alt="JavaScript Course"
              />
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <img
                    src="https://scooplabs.in/assets/img/course/all/node.png"
                    width="30"
                    className="me-2"
                    alt="JS Icon"
                  />
                  <h5 className="fw-bold mb-0">JS</h5>
                </div>
                <div className="text-warning mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="text-muted">4.5 / 24 Rating</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ITTraining;
