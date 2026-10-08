import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` min-h-screen w-full flex flex-col ${theme=="light"?"bg-white text-black":"bg-gray-900 text-white"}`}>
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
