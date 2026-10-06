import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { useParams } from "react-router-dom";
import { availabilitySchedules, getDoctorAvailability, getSpecialization } from "../utils/doctorData";
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

  const { firstName, image } = docInfo;

  const doctorAvailability = getDoctorAvailability(docInfo.id);
  const doctorSpecialization = getSpecialization(docInfo.id);

  return (
    <div className="w-auto h-auto p-5 m-5   bg-[#f0f0f0] text-center ">
      <div className="flex items-center  flex-wrap gap-y-6 gap-x-10 mt-6">
        <img src={image} className="DocImage" />
      </div>
      <div>
        <h1>{firstName}</h1>
      <h1>{doctorSpecialization}</h1>
      </div>
      




      {Object.entries(doctorAvailability).map(([day, times]) => {
        return (
          <div key={day}>
            <h1>{day}</h1>
            <h2>{times.join(", ")}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default DoctorDetails;
