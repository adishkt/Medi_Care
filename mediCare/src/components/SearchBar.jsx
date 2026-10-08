import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SearchBar(props) {
  const { value, onChange } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <input
      type="text"
      placeholder="Search by Name"
      className={`!rounded-lg w-90 border px-4 py-2 outline-none ${
        theme === "dark"
          ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
          : "bg-white text-black border-gray-300 placeholder-gray-500"
      }`}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
