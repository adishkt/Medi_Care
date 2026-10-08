import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import maleDoctor from "../assets/male_doctor_card.png";
import femaleDoctor from "../assets/female_doctor_card.png";

function DoctorCard(props) {
  const { theme } = useContext(ThemeContext);

  const { docData } = props;

  const { specialization } = props;

  const { firstName, lastName, age, gender, email, phone } = docData;
  const doctorImage = gender === "male" ? maleDoctor : femaleDoctor;
  return (
    <div
      className={`w-full min-w-0 p-5 cursor-pointer rounded-xl shadow-xl transition hover:scale-105 ${
        theme === "dark"
          ? "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
          : "bg-slate-50 text-slate-800 border border-blue-100 hover:bg-blue-50"
      }`}
    >
      <img
        className="w-full h-35 object-cover rounded-lg"
        src={doctorImage}
        alt="doctor"
      />
      <h1 className="!text-xl font-bold p-2 ">
        Dr.{firstName} {lastName}
      </h1>
      <p className="px-2 text-sm">Age : {age}</p>
      <h1 className="!text-1xl p-2">{gender}</h1>
      <h1 className="text-sm p-2 break-words">{email}</h1>
      <h1 className="text-sm p-2 break-words">{phone}</h1>
      <h1 className="!text-1xl p-2 text-blue-600 font-bold">
        {specialization}
      </h1>
    </div>
  );
}

export default DoctorCard;
