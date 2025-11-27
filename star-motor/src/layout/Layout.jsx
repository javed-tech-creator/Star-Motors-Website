import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* FIXED HEADER */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>

      {/* FIXED FOOTER */}
      <Footer />

    </div>
  );
}
