import { useEffect, useMemo, useState } from "react";
import { DOC_URL } from "../constants";
import { getSpecialization } from "../utils/doctorData";
import useDebounce from "../hooks/useDebounce";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import CardList from "../components/CardList";
import Loader from "../components/Loader";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const debounceText = useDebounce(selectedText, 500);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [debounceText, selectedSpecialization]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Failed to fetch the data of doctors.Please Try Again!!</h1>;
  }

  const totalPages = Math.ceil(filterDoctor.length / doctorsPerPage);
  const startingIndex = (currentPage - 1) * doctorsPerPage;

  const currentDoctors = filterDoctor.slice(
    startingIndex,
    startingIndex + doctorsPerPage,
  );

  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:!text-8xl font-bold text-center mt-2">
        Our Doctors
      </h1>
      <div className="p-10 flex flex-col sm:flex-row justify-center items-center gap-3">
        <SearchBar
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
        <FilterBox
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        />
      </div>
      {currentDoctors.length === 0 ? (
        <h2 className="text-center m-10">No doctors found.</h2>
      ) : (
        <CardList doctors={currentDoctors} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
