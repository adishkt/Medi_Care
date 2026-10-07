import { Link } from "react-router-dom";
import logo from "../assets/image.png";

function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 shadow-sm flex items-center px-6">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
