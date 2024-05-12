import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="../src/images/logo.png" className="navbar-logo-image" />
        </a>
        {/* Menu Items */}
        <ul className="nav-menu">
          <li
            className={`nav-item ${
              window.location.pathname === "/" ? "selected" : ""
            }`}
          >
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/about-us" ? "selected" : ""
            }`}
          >
            <a href="/about-us" className="nav-links">
              About Us
            </a>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/projects" ? "selected" : ""
            }`}
          >
            <a href="/projects" className="nav-links">
              Projects
            </a>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/our-clients" ? "selected" : ""
            }`}
          >
            <a href="/our-clients" className="nav-links">
              Our Clients
            </a>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/certificates" ? "selected" : ""
            }`}
          >
            <a href="/certificates" className="nav-links">
              Certificates
            </a>
          </li>
        </ul>
        {/* Contact Us */}
        <a href="/contact-us" className="nav-contact">
          <span>Contact Us</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;