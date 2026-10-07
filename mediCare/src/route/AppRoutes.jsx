import App from "../App";
import BookAppointment from "../components/BookAppointment";
import DoctorDetails from "../components/DoctorDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import MyAppointments from "../pages/MyAppointments";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/doctor/:docId",
        element: <DoctorDetails />,
      },
      {
        path:"/bookAppointment/:docId",
        element:<BookAppointment/>
      },
      {
        path:"/appointments",
        element:<MyAppointments />
      }
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
