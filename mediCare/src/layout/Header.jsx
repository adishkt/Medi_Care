import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeToggle from "../components/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`w-full h-20 sticky top-0 z-50 flex items-center px-4 sm:px-6 shadow-lg rounded-b-xl ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div>
        <Link to="/">
          <img className="w-20 sm:w-24" src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="ml-auto">
        <ul className="flex items-center gap-2">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/appointments"
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              My Appointment
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
