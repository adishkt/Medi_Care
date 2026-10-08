import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import ThemeToggle from "../components/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`w-full h-16  border-b border-gray-200 shadow-sm flex items-center px-6 ${theme == "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <div>
        <img className="w-24" src={logo} alt="logo" />
      </div>
      <nav className="ml-auto">
        <ul className="flex items-center gap-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/appointments">
            <li>My Appointment</li>
          </Link>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
