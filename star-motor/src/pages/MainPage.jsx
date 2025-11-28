import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainPage = () => {
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
      <div id="cursorFollower" className="hidden lg:block cursor-follower"></div>
      <div>
        <span className="text-white text-xl font-chakra  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta iste
          ipsa omnis nam dolorem soluta libero suscipit cumque fuga officiis,
          sunt nesciunt eaque atque! Sit, ex, necessitatibus maxime at dolorum
          amet officiis recusandae itaque ipsam impedit et? Ad enim at voluptas,
          dicta suscipit natus quasi recusandae consectetur, ratione eum
          perspiciatis.
        </span>
      </div>
    </>
  );
};

export default MainPage;
