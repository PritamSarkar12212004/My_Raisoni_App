import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAutoCommonCall from "@/src/hooks/useAutoCommonCall";
import useMainDataCall from "@/src/hooks/useMainDataCall";
import { userContext } from "@/src/context/ContextApi";

const index = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const { AuthKeyFinderAuto } = useAutoCommonCall();
  const { successFun } = useMainDataCall();
  const { loader } = userContext();

  const tokenAuthFinder = async () => {
    const idAuth = await AsyncStorage.getItem("userId");
    const passAuth = await AsyncStorage.getItem("userPass");
    const id = (await JSON.parse(idAuth)) ? JSON.parse(idAuth) : "";
    const pass = (await JSON.parse(passAuth)) ? JSON.parse(passAuth) : "";

    AuthKeyFinderAuto({ id, pass, apiCall: successFun });
  };
  const homeFumc = () => {
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView className="w-full bg-white h-full">
      <View className="w-full h-full flex items-center justify-between py-10">
        <View className=""></View>
        <View className="w-full flex items-center justify-center">
          <LottiAnimation
            path={Animation.Disk}
            color={"white"}
            height={300}
            width={300}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={() => homeFumc()}>
            <Text className="mt-5 underline text-center text-2xl text-blue-500">
              Go to Login Page
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex items-center justify-center px-12 ">
          <TouchableOpacity
            onPress={() => (loader ? null : tokenAuthFinder())}
            activeOpacity={0.8}
            className="w-full bg-blue-500 rounded-[40px] h-16 flex items-center justify-center"
          >
            {loader ? (
              <ActivityIndicator color="white" size="large" />
            ) : (
              <Text className="text-white text-center text-xl font-bold">
                Try Again
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
