import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Foooter = () => {
  return (
    <>
      <div className=" text-white items-center text-4xl bottom-auto text-green-300 text-6xl font-bold bg-black h-24 italic">
        stay updated
      </div>
      <div className="flex flex-row  items-center bg-black text-white justify-center">
        <Link
          className="p-4 hover:text-green-300 text-base "
          to="www.instagram.com"
        >
          <FaInstagram />
        </Link>
        <Link
          className="p-4 hover:text-green-300 text-base"
          to="www.facebook.com"
        >
          <FaFacebook />
        </Link>
        <Link className="p-4 hover:text-green-300 text-base" to="/">
          <FaTwitter />
        </Link>
      </div>
      <div className="flex flex-col items-center bg-black text-white ">
        © 2021 by KFB
      </div>
    </>
  );
};

export default Foooter;

/**© */
