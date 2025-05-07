import { Alert } from "react-native";
import AuthConatant from "../constants/AuthConatant";
import { userContext } from "../context/ContextApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";

const useAutoCommonCall = () => {
  const { setloader, setglobaltoken, setglobaluid } = userContext();
  const passIdSaver = async (id, pass) => {
    try {
      await AsyncStorage.setItem("userId", JSON.stringify(id));
      await AsyncStorage.setItem("userPass", JSON.stringify(pass));
      await AsyncStorage.setItem("userToken", "true");
    } catch (error) {
      console.log(error);
    }
  };
  const AuthKeyFinderAuto = async ({ id, pass, apiCall }: any) => {
    setloader(true);
    await axios
      .post("https://ghrua.cybervidya.net/api/auth/login", {
        password: pass,
        reCaptchaToken: AuthConatant.reCaptchaToken,
        userName: id,
      })
      .then((res) => {
        console.log(res.data.data);
        apiCall(res);
        setglobaltoken(res.data.data.token ? res.data.data.token : null);
        setglobaluid(res.data.data.id ? res.data.data.id : null);
        passIdSaver(id, pass);
      })
      .catch((err) => {
        console.log(err)
        setloader(false);
        Alert.alert("Error", err.response.data.message);
        router.replace("/(auth)");
      });
  };
  return {
    AuthKeyFinderAuto,
  };
};

export default useAutoCommonCall;
