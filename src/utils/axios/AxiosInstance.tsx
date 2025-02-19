import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: "https://my-raisoni-backend.vercel.app",
});
export default AxiosInstance;
