import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { getSpecialization, specialization } from "../utils/doctorData";
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
      <h1 className="text-8xl ">Our Doctors</h1>
      <div className="flex flex-wrap  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((users) => {
          const doctorSpecialization = getSpecialization(users.id);

          return (
            <Link key={users.id} to={"/doctor/" + users.id}>
              <DoctorCard
                docData={users}
                specialization={doctorSpecialization}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
