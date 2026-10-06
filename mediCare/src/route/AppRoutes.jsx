import App from "../App";
import DoctorDetails from "../components/DoctorDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

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
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
