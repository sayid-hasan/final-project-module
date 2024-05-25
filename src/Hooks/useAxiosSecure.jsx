import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const token = localStorage.getItem("access-token");
  // request interceptor to send headers in every api request
  axiosSecure.interceptors.request.use(
    async (request) => {
      // Edit request config
      // console.log("hitting in interceptror", token);
      request.headers.authorization = await `Bearer ${token}`;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // resposne interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log("status error in interceptors", error);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
