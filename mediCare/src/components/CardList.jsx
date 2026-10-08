import { Link } from "react-router-dom";
import { getSpecialization } from "../utils/doctorData";
import DoctorCard from "./DoctorCard";

function CardList(props) {
  const { doctors } = props;
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((users) => {
        const doctorSpecialization = getSpecialization(users.id);

        return (
          <Link key={users.id} to={"/doctor/" + users.id}>
            <DoctorCard docData={users} specialization={doctorSpecialization} />
          </Link>
        );
      })}
    </div>
  );
}

export default CardList;
