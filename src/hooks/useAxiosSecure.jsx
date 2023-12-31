import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";

const useAxiosSecure = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://elegant-edge-server.vercel.app",
  });

  useEffect(() => {
    if (user) {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });

      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
            await logOut();
            navigate("/login");
          }
          return Promise.reject(error);
        }
      );
    }
  }, [logOut, navigate, axiosSecure, user]);

  return [axiosSecure];
};

export default useAxiosSecure;
