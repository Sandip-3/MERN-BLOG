import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/user/register", userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/user/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
