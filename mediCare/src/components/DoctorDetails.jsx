import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { useParams } from "react-router-dom";

function DoctorDetails() {
  const [docInfo, setDocInfo] = useState(null);
  const { docId } = useParams();

  const fetchDoc = async () => {
    try {
      const data = await fetch(DOC_URL + docId);
      const json = await data.json();
      setDocInfo(json.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDoc();
  });

  const { firstName } = docInfo;

  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
}

export default DoctorDetails;
