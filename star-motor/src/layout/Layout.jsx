import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function Layout() {

    useEffect(() => {
      const follower = document.getElementById("cursorFollower");
  
      const move = (e) => {
        follower.style.left = e.clientX + 12 + "px"; // pointer ke thoda right me
        follower.style.top = e.clientY + 12 + "px"; // pointer ke thoda bottom me
      };
  
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }, []);

  return (
    <>
     {" "}
      <div
        id="cursorFollower"
        className="hidden lg:block cursor-follower"
      ></div>
             <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-[90px] "> 
        {/* pt-[90px] = navbar height ka space */}
        <Outlet />
      </main>

      {/* FOOTER (NORMAL, BOTTOM ME RAHEGA AUTOMATIC) */}
      <Footer />
    </div>
    </>

  );
}
