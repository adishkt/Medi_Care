import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DoctorCard(props) {
  const { theme } = useContext(ThemeContext);

  const { docData } = props;

  const { specialization } = props;

  const { firstName, lastName, age, gender, email, phone, image } = docData;
  return (
    <div
      className={`w-auto h-auto p-5 m-5 hover:bg-gray-600 cursor-pointer rounded-xl ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#f0f0f0] text-black"
      }`}
    >
      <img src={image} />
      <h1 className="!text-3xl font-bold p-2">
        Dr.{firstName} {lastName} , {age}
      </h1>
      <h1 className="!text-1xl p-2">{gender}</h1>
      <h1 className="!text-1xl p-2">{email}</h1>
      <h1 className="!text-1xl p-2">{phone}</h1>
      <h1 className="!text-1xl p-2 text-sky-400 font-bold">{specialization}</h1>
    </div>
  );
}

export default DoctorCard;
