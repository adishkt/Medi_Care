import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import { useParams } from "react-router-dom";

function BookAppointment() {
  const [infoDoc, setInfoDoc] = useState(null);
  const { docId } = useParams();

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

  const { firstName } = infoDoc;
  return <div>{firstName}</div>;
}

export default BookAppointment;
