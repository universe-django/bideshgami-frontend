import axios from "axios";
import Cookies from "js-cookie";

//https://bideshgami.onrender.com/api/v1
const useAxios = axios.create({
  baseURL: "https://bideshgami.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
useAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default useAxios;
