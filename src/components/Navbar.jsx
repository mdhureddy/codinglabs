import { Link } from "react-router-dom";
import "../index.css"; // ✅ correct path

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Coding Labs</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/ittraining">IT Training</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/internship">Internship</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/placement">Placement</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
