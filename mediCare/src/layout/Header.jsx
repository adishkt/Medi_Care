import { Link } from "react-router-dom";
import logo from "../assets/image.png";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 shadow-sm flex">
      <div>
        <img className="w-24" src={logo} alt="logo" />
      </div>
      <nav className="ml-auto">
        <ul className="flex space-x-6 mr-5 mt-5 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
