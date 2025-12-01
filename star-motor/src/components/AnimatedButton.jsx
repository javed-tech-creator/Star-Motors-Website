import React from "react";

const AnimatedButton = ({
  text = "+91 752 60 74 042",

  // Colors
  borderColor = "#ff6b35",
  bgColor = "#ff6b35",
  textColor = "#ffffff",
  cornerColor = "#111111",

  // Size & spacing
  width = "30%",
  height = "50px",
  paddingX = "px-7",
  paddingY = "py-1.5",
  textSize = "text-[14px]",
  margintop = "0px",
  duration = 300,
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`
         group flex font-chakra relative uppercase tracking-tight
        font-semibold items-center justify-center transition-all duration-500 ease-out 
        ${paddingX} ${paddingY} ${textSize} ${className}
      `}
      style={{
        color: textColor,
        width,
        height,
        marginTop: margintop,
        backgroundColor: bgColor,
        border: "1px solid transparent",
        transitionDuration: `${duration}ms`,
      }}
    >
      {/* BACKGROUND + BORDER on HOVER */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all z-0"
        style={{
          backgroundColor: "black", // Hover bg black
          border: `2px solid ${borderColor}`, // Hover border orange
          transitionDuration: `${duration}ms`,
        }}
      ></span>

      {/* CORNERS (HIDE ON HOVER) */}
      <span
        className="absolute h-7 w-5 rotate-52 -left-2 -top-4 group-hover:hidden transition-transform duration-500 ease-out pointer-events-none"
        style={{ backgroundColor: cornerColor }}
      ></span>
      <span
        className="absolute h-7 w-5 rotate-52 -right-2 -bottom-4 group-hover:hidden transition-transform duration-500 ease-out pointer-events-none"
        style={{ backgroundColor: cornerColor }}
      ></span>

      {/* TEXT (changes to white on hover) */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default AnimatedButton;
