import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { Link, useParams } from "react-router-dom";
import { getDoctorAvailability, getSpecialization } from "../utils/doctorData";
import "./DoctorDetails.css";

function DoctorDetails() {
  const [docInfo, setDocInfo] = useState(null);
  const { docId } = useParams();

  const fetchDoc = async () => {
    try {
      const data = await fetch(DOC_URL + docId);
      const json = await data.json();
      setDocInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  if (docInfo === null) {
    return <h1>Loading...</h1>;
  }

  const { firstName, image, email, phone } = docInfo;

  const doctorAvailability = getDoctorAvailability(docInfo.id);
  const doctorSpecialization = getSpecialization(docInfo.id);

  return (
    <>
      <Link to="/">
        <h2 className="Back-btn">⬅ Back to doctors</h2>
      </Link>
      <div className="w-auto h-auto p-5 m-5   bg-[#f0f0f0] text-center ">
        <div className="profile-header">
          <div className="profile-main">
            <img src={image} className="DocImage" />
            <div className="profile-info">
              <h1>Name : Dr.{firstName}</h1>
              <h2>Specialization : {doctorSpecialization}</h2>
              <h2>Email : {email}</h2>
              <h2>Phone no : {phone}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto h-auto p-5 m-5   bg-[#f0f0f0]  ">
        <div className="Availability-info ml-10 mt-6 ">
          <h1>Availability ::</h1>
          {Object.entries(doctorAvailability).map(([day, times]) => {
            return (
              <div key={day}>
                <h2>Day : {day}</h2>
                <h2>Time : {times.join(", ")}</h2>
              </div>
            );
          })}
          <div className="flex justify-center mt-8">
            <Link to={"/bookAppointment/" + docInfo.id}>
              <button
                type="button"
                className="px-6 py-3 text-white font-semibold
                 bg-blue-600 hover:bg-blue-700
                 rounded-lg shadow-sm
                 transition-all duration-200
                 hover:shadow-md"
              >
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDetails;

// flex items-center  flex-wrap gap-y-6 gap-x-10 mt-6
