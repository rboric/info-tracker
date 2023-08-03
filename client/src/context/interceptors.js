import axios from "axios";
import { getTokenFromStorage } from "./storage";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();

    if (token) {
      // If the token exists, add it to the request headers
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
