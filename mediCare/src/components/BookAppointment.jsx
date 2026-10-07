import { useEffect, useReducer, useRef, useState } from "react";
import { DOC_URL } from "../constants";
import { Link, useParams } from "react-router-dom";
import "./BookAppointment.css";
import { getDoctorAvailability } from "../utils/doctorData";
import { handleValidateForm } from "../utils/validateForm";

function BookAppointment() {
  const [infoDoc, setInfoDoc] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { docId } = useParams();

  const nameRef = useRef(null);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const initialState = {
    name: "",
    age: "",
    email: "",
    phone: "",
    place: "",
    gender: "",
  };

  const [formValue, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.value };
      case "UPDATE_AGE":
        return { ...state, age: action.value };
      case "UPDATE_EMAIL":
        return { ...state, email: action.value };
      case "UPDATE_PHONE":
        return { ...state, phone: action.value };
      case "UPDATE_PLACE":
        return { ...state, place: action.value };
      case "UPDATE_GENDER":
        return { ...state, gender: action.value };
      default:
        return state;
    }
  }

  function handleDate(e) {
    setSelectedDate(e.target.value);
  }

  function handleTime(e) {
    setSelectedTime(e.target.value);
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

  const selectDay = days[date.getDay()];

  const doctorAvailability = getDoctorAvailability(infoDoc.id);
  const availableTimes = doctorAvailability[selectDay];

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

            <div className="appointment-details">
              <h3>Select Time of Appointment</h3>
              {selectedDate ? (
                availableTimes ? (
                  availableTimes.map((time) => {
                    return (
                      <button
                        className="Availability-btn"
                        key={time}
                        value={time}
                        onClick={handleTime}
                      >
                        {time}
                      </button>
                    );
                  })
                ) : (
                  <p>No appointment for selected day</p>
                )
              ) : (
                <p>Select Date</p>
              )}
              <h1>{selectedTime}</h1>
            </div>

            <div className="formsInput">
              <label>Name : </label>
              <input
                className="name"
                placeholder="Name"
                ref={nameRef}
                value={formValue.name}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_NAME",
                    value: e.target.value,
                  })
                }
              />
              <label>Age : </label>
              <input
                className="age"
                placeholder="Age"
                value={formValue.age}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_AGE",
                    value: e.target.value,
                  })
                }
              />
              <label>Email : </label>
              <input
                className="email"
                placeholder="Email"
                value={formValue.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EMAIL",
                    value: e.target.value,
                  })
                }
              />
              <label>Phone : </label>
              <input
                className="phone"
                placeholder="Phone"
                value={formValue.phone}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_PHONE",
                    value: e.target.value,
                  })
                }
              />
              <label>Place : </label>
              <input
                className="place"
                placeholder="Place"
                value={formValue.place}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_PLACE",
                    value: e.target.value,
                  })
                }
              />

              <label>Gender : </label>
              <select
                className="gender"
                name="Gender"
                value={formValue.gender}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_GENDER",
                    value: e.target.value,
                  })
                }
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <button
                className="make-appointment"
                onClick={() =>
                  handleValidateForm(
                    formValue,
                    selectedDate,
                    selectedTime,
                    nameRef,
                  )
                }
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
