import React, { useEffect } from "react";
import { FcStatistics } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CiLogin } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { reset, logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
    return () => {
      dispatch(reset);
    };
  }, [dispatch, navigate, isSuccess, isError]);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

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
          {user ? (
            <ul className="flex md:gap-12 gap-4 md:text-xl text-md mr-4">
              <li>
                <Link className="flex items-center gap-2" to={"/createPost"}>
                  <IoCreate />
                  Create Post
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2"
                  to={"/logout"}
                  onClick={handleLogout}
                >
                  <IoLogOutOutline />
                  Logout
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FaUser />
                  {user.name}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex md:gap-12 gap-6 md:text-xl text-md mr-4">
              <li>
                <Link className="flex items-center gap-2" to={"/login"}>
                  <CiLogin />
                  Login
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" to={"/register"}>
                  <IoCreate />
                  Register
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
