import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AppointmentCard(props) {
  const { theme } = useContext(ThemeContext);
  const { appointmentData, handleCancel } = props;

  const { doctorName, specialization, selectDate, selectedTime } =
    appointmentData;
  const { name, age, gender } = appointmentData.patient;
  return (
    <div
      className={`w-auto h-auto p-5 m-5 rounded-xl ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#f0f0f0] text-black"
      } `}
    >
      <div className="m-4 ">
        <h1 className="!text-2xl font-bold">{doctorName}</h1>
        <h1 className="!text-lg text-sky-400">{specialization}</h1>
      </div>
      <div className="m-4">
        <h1 className="!text-lg">Date : {selectDate}</h1>
        <h1 className="!text-lg">Time : {selectedTime}</h1>
      </div>
      <div className="m-4">
        <h1 className="!text-lg">Patient : {name}</h1>
        <h1 className="!text-lg">Age : {age}</h1>
        <h1 className="!text-lg">Gender : {gender}</h1>
      </div>
      <div className="w-50 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors text-center ">
        <button onClick={() => handleCancel(appointmentData.id)}>
          Cancel Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
