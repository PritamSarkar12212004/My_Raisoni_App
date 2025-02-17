import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const useFainanceFainalDowqnload = () => {
  const router = useRouter();

  const { globaltoken, setpdfValue } = userContext();

  const FainanceDocDownloader = async ({ item, setloading }: any) => {
    AxiosInstance.post("/download/fainace/maindownload", {
      token: globaltoken,
      voucherNo: item.voucherNo,
    })
      .then((res) => {
        setpdfValue(res.data.data);
        router.push("/(main)/PdfViewPage");
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        router.replace("/(helper)/TryAginPage");
      });
  };
  return { FainanceDocDownloader };
};

export default useFainanceFainalDowqnload;
