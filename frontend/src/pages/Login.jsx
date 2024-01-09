import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { reset, login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, user, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = loginData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
    }
    return () => dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All field input required..!");
    } else if (email && password) {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    } else {
      return toast.error("Login Failed");
    }
  };

  return (
    <>
      <div className="container mx-auto flex gap-4 flex-col bg-salte-50 overflow-y-auto">
        <Header />
        <form onSubmit={handleLogin}>
          <div className=" ml-6 mr-6 mx-auto justify-center mt-6 shadow-md rounded-md ">
            <div className="container mx-auto flex items-center justify-center ">
              <div className="flex flex-col space-y-12 w-screen md:w-1/2 overflow-hidden mb-8">
                <h1 className="text-4xl text-center font-bold ">Login Form</h1>
                <div className="flex flex-col">
                  <h3 className="text-start text-2xl font-serif">Email</h3>
                  <input
                    className="py-4 text-xl font-serif border-b-2 focus:outline-none border-slate-900 focus:border-blue-200"
                    type="email"
                    value={loginData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="sandy@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-start text-2xl font-serif">Password</h3>
                  <input
                    className="py-4 text-xl font-serif focus:outline-none border-b-2 border-slate-900 focus:border-blue-200"
                    type="password"
                    value={loginData.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                  />
                </div>
                <button
                  className="bg-slate-900 text-white py-1 rounded-md text-3xl font-serif hover:scale-105 duration-1000 hover:rounded-sm hover:opacity-90"
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
