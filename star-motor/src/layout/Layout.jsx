import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Layout() {
  return (
       <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-[90px] px-6 lg:px-20"> 
        {/* pt-[90px] = navbar height ka space */}
        <Outlet />
      </main>

      {/* FOOTER (NORMAL, BOTTOM ME RAHEGA AUTOMATIC) */}
      <Footer />
    </div>
  );
}
