import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Coding <span>Labs.</span></h2>
          <p className="footer-desc">
            Empowering future tech talent through hands-on learning, innovation,
            and real-world training experiences.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/ittraining">IT Training</Link></li>
            <li><Link to="/internship">Internship</Link></li>
            <li><Link to="/placement">Placement</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><HiOutlineMail /> info@scooplabs.in</p>
          <p><FiPhoneCall /> +91 98444 00550</p>
          <p><HiOutlineMap /> 59, 2nd Floor, VLM Towers 10th Cross Road,<br />
            2nd Stage Padmanabha Nagar, Banashankari,<br />
            Bengaluru, Karnataka 560070</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
