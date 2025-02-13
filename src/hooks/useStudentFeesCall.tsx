import { router } from "expo-router";
import { userContext } from "../context/ContextApi";
import AxiosInstance from "../utils/axios/AxiosInstance";

const useStudentFeesCall = () => {
  const { globaltoken, globaluid, setfeesDetails } = userContext();

  const ApiStudentFeesCall = () => {
    AxiosInstance.post("/fees", {
      data: { token: globaltoken, id: globaluid },
    })
      .then((res) => {
        setfeesDetails(res.data.data.studentFeesPaymentDtls);
      })
      .catch((err) => {
        console.log(err);
        router.replace("/(helper)/TryAginPage");

      });
  };
  return { ApiStudentFeesCall };
};

export default useStudentFeesCall;
