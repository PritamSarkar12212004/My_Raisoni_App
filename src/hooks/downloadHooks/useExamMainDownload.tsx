import { userContext } from "@/src/context/ContextApi";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const useExamMainDownload = () => {
  const router = useRouter();
  const { globaltoken, setpdfValue } = userContext();

  const exmamMainDownload = async ({ item, setloading }: any) => {
    AxiosInstance.post("/download/exam/maindownload", {
      token: globaltoken,
      semesterId: item.dataList[0].semesterId,
      sessionId: item.dataList[0].sessionId,
    })
      .then((res) => {
        setpdfValue(res.data.data);
        router.push("/(main)/PdfViewPage");
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        Alert.alert("Error", "Document not Available");
      });
  };
  return { exmamMainDownload };
};

export default useExamMainDownload;
