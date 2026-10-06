import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { useParams } from "react-router-dom";
import { availabilitySchedules } from "../utils/doctorData";

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

  const { firstName } = docInfo;

  const scheduleIndex = (docInfo.id - 1) % availabilitySchedules.length;

  const doctorAvailability = availabilitySchedules[scheduleIndex];

  return (
    <div>
      <h1>{firstName}</h1>

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
