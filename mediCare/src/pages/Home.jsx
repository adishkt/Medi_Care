import { useEffect, useMemo, useState } from "react";
import { DOC_URL } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { getSpecialization, specialization } from "../utils/doctorData";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import Pagination from "../components/Pagination";
import SearchBar from "../components/searchBar";
import FilterBox from "../components/FilterBox";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const debounceText = useDebounce(selectedText, 500);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;

  const filterDoctor = useMemo(() => {
    return doctors.filter((res) => {
      const filterData = res.firstName
        .toLowerCase()
        .includes(debounceText.toLowerCase());

      const specializationValue =
        selectedSpecialization === "" ||
        getSpecialization(res.id) === selectedSpecialization;

      return filterData && specializationValue;
    });
  }, [doctors, selectedSpecialization, debounceText]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [debounceText, selectedSpecialization]);

  const totalPages = Math.ceil(filterDoctor.length / doctorsPerPage);
  const startingIndex = (currentPage - 1) * doctorsPerPage;

  const currentDoctors = filterDoctor.slice(
    startingIndex,
    startingIndex + doctorsPerPage,
  );

  return (
    <div>
      <h1 className="text-8xl ">Our Doctors</h1>
      <div className="p-10 flex">
        <SearchBar
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
        <FilterBox
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentDoctors.map((users) => {
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
