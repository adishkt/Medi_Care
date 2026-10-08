import { specialization } from "../utils/doctorData";

function FilterBox(props) {
  const { value, onChange } = props;
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="border border-black m-2"
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
