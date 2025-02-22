import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { userContext } from "@/src/context/ContextApi";
import { router } from "expo-router";

const useFinanceDownloadHook = () => {
  const { globaltoken } = userContext();

  const apiCaller = ({ data, setData, setdata2 }: any) => {
    AxiosInstance.post("/download/fainanceOne", {
      data: { token: globaltoken },
    })
      .then((res) => {
        setData(res.data.data.data.data);
        setdata2(res.data.data.data2.data);
      })
      .catch((err) => {
        console.log(err);
        router.replace("/(helper)/TryAginPage");

      });
  };
  return { apiCaller };
};

export default useFinanceDownloadHook;
