import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import useMainDataCall from "@/src/hooks/useMainDataCall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAutoCommonCall from "@/src/hooks/useAutoCommonCall";
import Animation from "@/src/constants/Animation";

const AutoLoager = () => {
  const { AuthKeyFinderAuto } = useAutoCommonCall();
  const { successFun } = useMainDataCall();
  const tokenAuthFinder = async () => {
    const idAuth = await AsyncStorage.getItem("userId");
    const passAuth = await AsyncStorage.getItem("userPass");
    const id = (await JSON.parse(idAuth)) ? JSON.parse(idAuth) : "";
    const pass = (await JSON.parse(passAuth)) ? JSON.parse(passAuth) : "";
    AuthKeyFinderAuto({ id, pass, apiCall: successFun });
  };

  useEffect(() => {
    tokenAuthFinder();
  }, []);
  return (
    <SafeAreaView className="w-full h-full flex items-center justify-between bg-white py-10">
      <View />
      <View className="w-full flex  items-center justify-center">
        <LottiAnimation
          path={Animation.Data}
          color={"white"}
          width={300}
          height={300}
        />
        <Text className="text-blue-500 text-xl font-bold">
          Hold your Device Tightly
        </Text>
      </View>
      <View className="w-full flex items-center justify-center">
        <Text>Loading ...</Text>
      </View>
    </SafeAreaView>
  );
};

export default AutoLoager;
