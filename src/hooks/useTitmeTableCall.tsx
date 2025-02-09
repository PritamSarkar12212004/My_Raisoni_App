import AxiosInstance from "../utils/axios/AxiosInstance";
import { userContext } from "../context/ContextApi";

const useTitmeTableCall = () => {
  const { globaltoken, globaluid, settimetable, setweekDetails } =
    userContext();
  const ApiTimeTableCall = () => {
    AxiosInstance.post("/timetable", {
      data: { token: globaltoken, id: globaluid },
    })
      .then((res) => {
        settimetable(res.data.data.data.data);
        setweekDetails(res.data.data.weekDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { ApiTimeTableCall };
};

export default useTitmeTableCall;
