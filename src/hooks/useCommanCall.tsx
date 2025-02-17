import { Alert } from "react-native";
import AuthConatant from "../constants/AuthConatant";
import { userContext } from "../context/ContextApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const useCommanCall = () => {
  const { setloader, setglobaltoken, setglobaluid } = userContext();
  const { pass, id } = userContext();
  const passIdSaver = async () => {
    try {
      await AsyncStorage.setItem("userId", JSON.stringify(id));
      await AsyncStorage.setItem("userPass", JSON.stringify(pass));
      await AsyncStorage.setItem("userToken", "true");
    } catch (error) {
      console.log(error);
    }
  };
  const AuthKeyFinder = ({ id, pass, apiCall }: any) => {
    setloader(true);
    axios
      .post("https://ghrua.cybervidya.net/api/auth/login", {
        password: pass,
        reCaptchaToken: AuthConatant.reCaptchaToken,
        userName: id,
      })
      .then((res) => {
        apiCall(res);
        setglobaltoken(res.data.data.token ? res.data.data.token : null);
        setglobaluid(res.data.data.id ? res.data.data.id : null);
        passIdSaver();
      })
      .catch((err) => {
        setloader(false);
        console.log(err.response);
        Alert.alert(
          "Error",
          "Invalid Credentials, if you entered Incorrect credentials 5 times then ID will be Blocked"
        );
      });
  };
  return {
    AuthKeyFinder,
  };
};

export default useCommanCall;
