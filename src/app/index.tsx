import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import LogoConstant from "../constants/LogoConstant";
import ColorConstant from "../constants/ColorConstant";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "../utils/axios/AxiosInstance";

const index = () => {
  const router = useRouter();

  const mainCheker = () => {
    AxiosInstance.post("/helper/maintanence")
      .then((res) => {
        if (res.data.data === true) {
          router.replace("/(helper)/MaintanenceMode");
        } else {
          cheker();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cheker = async () => {
    const token = await AsyncStorage.getItem("userToken");
    const tokenId = await AsyncStorage.getItem("userId");
    const tokenPass = await AsyncStorage.getItem("userPass");
    if (JSON.parse(token) && JSON.parse(tokenId) && JSON.parse(tokenPass)) {
      router.replace("/(auth)/AutoLoager");
    } else {
      router.replace("/(auth)");
    }
  };

  useEffect(() => {
    mainCheker();
  }, []);
  return (
    <>
      <StatusBar hidden={true} />
      <View
        className="w-full h-full flex items-center py-10 justify-between "
        style={{ backgroundColor: ColorConstant.SplashBg }}
      >
        <View />
        <Image
          source={LogoConstant.MainLogo}
          className="w-72 h-72"
          resizeMode="contain"
        />
        <View className="w-full flex items-center justify-center">
          <Text className="text-white text-lg font-bold">
            Wellcome to the Raisoni World
          </Text>
        </View>
      </View>
    </>
  );
};

export default index;
