import { userContext } from "@/src/context/ContextApi";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { Linking } from "react-native";

const useExamMainDownload = () => {
  const { globaltoken } = userContext();

  const exmamMainDownload = async ({ item }: any) => {
    console.log("hello");
  };
  return { exmamMainDownload };
};

export default useExamMainDownload;
