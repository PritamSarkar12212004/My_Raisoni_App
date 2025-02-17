import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { Alert } from "react-native";

const useResetHook = () => {
  const reseter = ({ email, setResetLoader, closeBottomSheet }: any) => {
    AxiosInstance.post("/reset/user/password", {
      email: email,
    })
      .then((res) => {
        Alert.alert("Error", res.data.message);
        setResetLoader(false);
        closeBottomSheet();
      })
      .catch((err) => {
        Alert.alert("Error", err.response.data.message);
        setResetLoader(false);
        closeBottomSheet();
      });
  };
  return { reseter };
};

export default useResetHook;
