import { useEffect, useMemo, useState } from "react";
import { DOC_URL } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { getSpecialization, specialization } from "../utils/doctorData";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";


function Home() {
  const [doctors, setDoctors] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const debounceText=useDebounce(selectedText,500);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const filterDoctor = useMemo(() => {
    return  doctors.filter((res) => {
      const filterData = res.firstName.toLowerCase().includes(debounceText.toLowerCase());

      const specializationValue =
        selectedSpecialization === "" ||
        getSpecialization(res.id) === selectedSpecialization;

      return filterData && specializationValue;
    });
  },[doctors,selectedSpecialization,debounceText]);

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
      <div className="p-10">
        <input
          type="text"
          className=" border border-black m-2"
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
        <div>
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value={""}>All Specializations</option>
            {specialization.map((specialization) => {
              return (
                <option key={specialization} value={specialization}>
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
