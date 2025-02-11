import { userContext } from "@/src/context/ContextApi";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { useRouter } from "expo-router";

const useExamMainDownload = () => {
  const router = useRouter();
  const { globaltoken, setpdfValue } = userContext();

  const exmamMainDownload = async ({ item, setloading }: any) => {
    AxiosInstance.post("/download/fainace/maindownload", {
      token: globaltoken,
    })
      .then((res) => {
        setpdfValue(res.data.data);
        router.push("/(main)/PdfViewPage");
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };
  return { exmamMainDownload };
};

export default useExamMainDownload;
