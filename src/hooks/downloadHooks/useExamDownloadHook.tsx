import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { userContext } from "@/src/context/ContextApi";

const useExamDownloadHook = () => {
  const { globaltoken }: any = userContext();

  const apiCaller = ({ data, setdata }: any) => {
    AxiosInstance.post("/download/examOne", {
      data: { token: globaltoken },
    })
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { apiCaller };
};

export default useExamDownloadHook;
