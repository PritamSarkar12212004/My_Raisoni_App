import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const useExamDownloadHook = () => {
  const router = useRouter();
  const { userDetails } = userContext();

  const { globaltoken }: any = userContext();

  const apiCaller = ({ data, setdata }: any) => {
    AxiosInstance.post("/download/examOne", {
      data: { token: globaltoken, id: userDetails.registrationNumber },
    })
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        router.replace("/(helper)/TryAginPage");
      });
  };
  return { apiCaller };
};

export default useExamDownloadHook;
