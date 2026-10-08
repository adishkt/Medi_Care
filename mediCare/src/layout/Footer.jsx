import logo from "../assets/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`w-full border-t ${
        theme === "light"
          ? "bg-gray-50 text-gray-800 border-gray-200"
          : "bg-gray-950 text-gray-200 border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <img className="w-40 mb-4" src={logo} alt="MediCare logo" />

          <p className="text-sm leading-6 max-w-sm">
            Your trusted healthcare companion. Find doctors, explore
            specializations, and manage your appointments easily.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/appointments"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                My Appointments
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

          <div className="space-y-3 text-sm">
            <p>Mail us : support@medicare.com</p>
            <p>Call us : +91 98765 *****</p>
            <p>Place : Kerala, India</p>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 px-6 py-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <p>© 2026 MediCare. All rights reserved.</p>
            <p>Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
