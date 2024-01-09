import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { reset, register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...registerData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/login");
    }
    return () => dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const { name, email, password, rePassword } = registerData;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("All field input required..!");
    } else if (password !== rePassword) {
      toast.error("Password don't matched");
    } else if (password === rePassword) {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
      if (userData) {
        toast.success("Register Success");
      }
    } else {
      return toast.error("Register Failed");
    }
    // toast.success("Register Success");
  };
  return (
    <div className="container mx-auto flex gap-4 flex-col bg-salte-50 overflow-y-auto">
      <Header />
      <form onSubmit={handleLogin}>
        <div className=" ml-6 mr-6 mx-auto justify-center mt-6 shadow-md rounded-md ">
          <div className="container mx-auto flex items-center justify-center ">
            <div className="flex flex-col space-y-8 w-screen md:w-1/2 overflow-hidden mb-8">
              <h1 className="text-4xl text-center font-bold ">Register Form</h1>
              <div className="flex flex-col">
                <h3 className="text-start text-2xl font-serif">Username</h3>
                <input
                  className="py-4 text-xl  focus:outline-none border-b-2 border-slate-900 focus:border-blue-200"
                  type="text"
                  value={registerData.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Sandy"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-start text-2xl font-serif">Email</h3>
                <input
                  className="py-4 text-xl font-serif border-b-2 focus:outline-none border-slate-900 focus:border-blue-200"
                  type="email"
                  value={registerData.email}
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
                  value={registerData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-start text-2xl font-serif">Re-Password</h3>
                <input
                  className="py-4 text-xl font-serif focus:outline-none border-b-2 border-slate-900 focus:border-blue-200"
                  type="password"
                  value={registerData.rePassword}
                  name="rePassword"
                  onChange={handleChange}
                  placeholder="Enter RE-Password"
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
  );
}

export default Register;
