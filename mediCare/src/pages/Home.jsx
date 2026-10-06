import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { specialization } from "../utils/doctorData";
import { Link } from "react-router-dom";

function Home() {
  const [doctors, setDoctors] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(DOC_URL);
      const json = await data.json();
      console.log(json.users);
      setDoctors(json.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-6xl w-fit">hello</h1>
      <div className="flex flex-wrap gap-2">
        {doctors.map((users) => {
          let arr = (users.id - 1) % specialization.length;

          return (
            <Link key={users.id} to={"/doctor/" + users.id}>
              <DoctorCard
                docData={users}
                specialization={specialization[arr]}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
