import { useRouter } from "expo-router";
import { userContext } from "../context/ContextApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogout = () => {
  const {
    setcastAndReligion,
    setcourseDetails,
    setfatherDetails,
    setidDetails,
    setmotherDetails,
    setpersonalInformation,
    setstudentAddress,
    setuserDetails,
    setid,
    setpass,
    setexamScore,
  } = userContext();
  const router = useRouter();
  const Logout = async () => {
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("userPass");
    await AsyncStorage.removeItem("userToken");
    setcastAndReligion(null);
    setcourseDetails(null);
    setfatherDetails(null);
    setidDetails(null);
    setmotherDetails(null);
    setpersonalInformation(null);
    setstudentAddress(null);
    setuserDetails(null);
    setid("");
    setpass("");
    setexamScore(null);

    router.replace("/(auth)");
  };
  return { Logout };
};

export default useLogout;
