import React, { useState } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = loginData;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All field input required..!");
    } else {
      const res = await axios.post("/login", { email, password });
      toast.success("Login Success");
      // console.log(res.data);
      return res.data;
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
