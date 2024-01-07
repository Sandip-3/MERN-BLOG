import React from "react";
import { FcStatistics } from "react-icons/fc";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex  justify-between py-6 md:ml-6 md:mr-6 items-center bg-slate-50 rounded-sm">
        <div className="ml-4 flex md:space-x-6 items-center">
          <FcStatistics className="cursor-pointer" size={35} />

          <Link to={"/"} className="md:text-3xl text-xl font-serif">
            Burogu
          </Link>
        </div>
        <nav>
          <ul className="flex md:gap-12 gap-6 md:text-xl text-md mr-4">
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
