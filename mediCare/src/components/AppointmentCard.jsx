function AppointmentCard(props) {
  const { appointmentData } = props;

  const { doctorName, specialization, selectDate, selectedTime } =
    appointmentData;
  const { name, age, gender } = appointmentData.patient;
  return (
    <div className="w-auto h-auto p-5 m-5  bg-[#f0f0f0]">
      <div className="m-4">
        <h1>{doctorName}</h1>
        <h1>{specialization}</h1>
      </div>
      <div className="m-4">
        <h1>Date : {selectDate}</h1>
        <h1>Time : {selectedTime}</h1>
      </div>
      <div className="m-4">
        <h1>Patient : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>Gender : {gender}</h1>
      </div>
      <div
        className="w-50 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors text-center "
      >
        <button>Cancel Appointment</button>
      </div>
    </div>
  );
}

export default AppointmentCard;
