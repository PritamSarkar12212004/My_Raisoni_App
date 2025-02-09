import AxiosInstance from "../utils/axios/AxiosInstance";
import { userContext } from "../context/ContextApi";

const usettendanceCall = () => {
  const { globaltoken, globaluid, setattendance } = userContext();
  const ApicallAttendance = () => {
    AxiosInstance.post("/attendance", {
      data: { token: globaltoken, id: globaluid },
    })
      .then((res) => {
        setattendance(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { ApicallAttendance };
};

export default usettendanceCall;
