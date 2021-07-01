import React from "react";
import netflix from "../assets/netflix.png";

const Navbar = () => {
  return (
    <div className="Navbar absolute w-full z-10">
      <div className="nav-contents flex justify-between items-center">
        <img className="nav-logo w-20 md:w-40" src={netflix} alt="netflix" />
        <button className="w-20 mr-5 md:w-28 px-2 top-4 lg:px-4 text-white text-xs md:text-lg p-1.5 bg-primary hover:bg-darkRed">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
