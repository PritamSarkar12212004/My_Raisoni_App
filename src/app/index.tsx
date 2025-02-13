import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LogoConstant from "../constants/LogoConstant";
import ColorConstant from "../constants/ColorConstant";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

const index = () => {
  const router = useRouter();
  const cheker = async () => {
    const token = await AsyncStorage.getItem("userToken");
    const tokenId = await AsyncStorage.getItem("userId");
    const tokenPass = await AsyncStorage.getItem("userPass");
    console.log(token, tokenId, tokenPass);

    if (JSON.parse(token) && JSON.parse(tokenId) && JSON.parse(tokenPass)) {
      router.replace("/(helper)/TryAginPage");
    } else {
      router.replace("/(helper)/TryAginPage");
    }
  };

  useEffect(() => {
    async function checkForUpdates() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync(); // Restart app to apply update
        }
      } catch (error) {
        console.log("Error checking for updates:", error);
      }
    }

    checkForUpdates();
    setTimeout(() => {
      cheker();
    }, 1500);
  }, []);
  return (
    <SafeAreaProvider className="w-full h-full flex items-center justify-center ">
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
    </SafeAreaProvider>
  );
};

export default index;
