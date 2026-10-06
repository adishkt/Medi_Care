import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { Link, useParams } from "react-router-dom";
import "./BookAppointment.css";
import { getDoctorAvailability } from "../utils/doctorData";

function BookAppointment() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [infoDoc, setInfoDoc] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const { docId } = useParams();

  function handleDate(e) {
    setSelectedDate(e.target.value);
  }

  const fetchInfo = async () => {
    try {
      const data = await fetch(DOC_URL + docId);
      const json = await data.json();
      setInfoDoc(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  if (infoDoc === null) {
    return <h1>Loading...</h1>;
  }

  const { firstName, lastName } = infoDoc;

  const date = new Date(selectedDate);
  date.getDay();
  console.log(date.getDay());
  const selectDay = days[date.getDay()];
  console.log(selectDay);

  const doctorAvailability = getDoctorAvailability(infoDoc.id);
  const availableTimes = doctorAvailability[selectDay];
  console.log(availableTimes);

  return (
    <>
      <Link to={"/doctor/" + infoDoc.id}>
        <h2 className="Back-btn">⬅ Back to doctor</h2>
      </Link>
      <div className="appointment">
        <div className="appointment-card">
          <h1 className="title">Book Appointment</h1>

          <div className="docInfo">
            <h2 className="docName">
              Dr.{firstName} {lastName}
            </h2>
            <p className="doctor-specialization">Cardiologist</p>
          </div>
          <div className="form">
            <h3 className="color-black">Select Date For Appointment</h3>
            <input type="date" value={selectedDate} onChange={handleDate} />
            <h1>{selectedDate}</h1>

            <div>
              <h3>Select Time of Appointment</h3>
              {availableTimes.map((time) => {
                      return (
                        <button className="Availability-btn" key={time}>
                          {time}
                        </button>
                      );
                    })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
