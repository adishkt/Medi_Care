import logo from "../assets/image.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`w-full  border-t border-gray-200 p-6 ${theme == "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <div className="p-6">
        <img className="w-64" src={logo} alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
