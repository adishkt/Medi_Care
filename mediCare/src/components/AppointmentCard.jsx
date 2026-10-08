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
      className={`w-auto h-auto p-5 m-5 rounded-xl border shadow-lg${
        theme === "dark"
          ? "bg-slate-800 text-white border-slate-700"
          : "bg-slate-50 text-slate-800 border-blue-100"
      } `}
    >
      <div className="m-4 ">
        <h1 className="!text-2xl font-bold">{doctorName}</h1>
        <h1 className="!text-lg text-blue-600">{specialization}</h1>
      </div>
      <div className="m-4">
        <h1 className="!text-lg">
          <span className="font-semibold">Date:</span> {selectDate}
        </h1>
        <h1 className="!text-lg">
          <span className="font-semibold">Time:</span> {selectedTime}
        </h1>
      </div>
      <div className="m-4">
        <p className="!text-lg">Patient : {name}</p>
        <p className="!text-lg">Age : {age}</p>
        <p className="!text-lg">Gender : {gender}</p>
      </div>
      <div className="w-full sm:w-50 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors text-center">
        <button onClick={() => handleCancel(appointmentData.id)}>
          Cancel Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
