import { useEffect, useState, useCallback } from "react";
import AppointmentCard from "../components/AppointmentCard";

function MyAppointments() {
  const [myAppointment, setMyAppointment] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointment = async () => {
    try {
      const data = await fetch("http://localhost:3000/appointments");
      const json = await data.json();
      console.log(json);
      setMyAppointment(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch appointment");
      setLoading(false);
    }
  };

  const handleCancel = useCallback(
    async (id) => {
      await fetch("http://localhost:3000/appointments/" + id, {
        method: "DELETE",
      });

      fetchAppointment();
    },
    [],
  );

  useEffect(() => {
    fetchAppointment();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (myAppointment.length === 0) {
    return <h1>No appointments for you...</h1>;
  }

  return (
    <div>
      <h1 className="text-8xl ">Your Appointments</h1>
      <div className="flex flex-wrap  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myAppointment.map((appointment) => {
          return (
            <AppointmentCard
              key={appointment.id}
              appointmentData={appointment}
              handleCancel={handleCancel}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyAppointments;
