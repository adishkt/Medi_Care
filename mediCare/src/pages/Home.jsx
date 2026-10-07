import { useEffect, useState } from "react";
import { DOC_URL } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { getSpecialization, specialization } from "../utils/doctorData";
import { Link } from "react-router-dom";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(DOC_URL);
      const json = await data.json();
      console.log(json.users);
      setDoctors(json.users);
      setFilterDoctor(json.users);
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
      <div className="p-10">
        <input
          type="text"
          className=" border border-black m-2"
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
        <button
          className="w-20 py-1 rounded-lg bg-gray-500 text-white font-semibold hover:bg-blue-600 transition-colors text-center"
          onClick={() => {
            const filterData = doctors.filter((res) =>
              res.firstName.toLowerCase().includes(selectedText.toLowerCase()),
            );
            setFilterDoctor(filterData);
          }}
        >
          Search
        </button>
        <div>
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value={""}>All Specializations</option>
            {specialization.map((specialization) => {
              return (
                <option key={specialization} value={specialization} >
                  {specialization}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterDoctor.map((users) => {
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
