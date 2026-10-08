import { useContext } from "react";
import { specialization } from "../utils/doctorData";
import { ThemeContext } from "../context/ThemeContext";

function FilterBox(props) {
  const { theme } = useContext(ThemeContext);

  const { value, onChange } = props;
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className={`border m-2 px-3 py-2 ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      >
        <option value={""}>All Specializations</option>
        {specialization.map((specialization) => {
          return (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterBox;
