import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorConstant from "@/src/constants/ColorConstant";
import { useNavigation } from "expo-router";
import NextButton from "@/src/components/splash/button/NextButton";
import SkipButton from "@/src/components/splash/button/SkipButton";

const index = () => {
  const navigatetion = useNavigation();
  const action = () => {
    return navigatetion.navigate("SecoundSplah");
  };
  return (
    <SafeAreaView
      className="w-full h-full "
      style={{ backgroundColor: ColorConstant.splash1 }}
    >
      <View className="w-full h-full flex items-center justify-between pb-3">
        <View className="flex-auto flex  justify-center  py-4 w-full ite px-3">
          <Text className="text-6xl text-white opacity-45 leading-tight font-extrabold">
            Get ready to
          </Text>
          <Text className="text-6xl text-white  opacity-70 leading-tight font-extrabold">
            Enrole in the
          </Text>
          <Text className="text-6xl text-white leading-tight font-extrabold">
            G.H.RAISONI
          </Text>
          <Text className="text-6xl text-white opacity-80 leading-tight font-extrabold">
            World -
          </Text>
        </View>
        <View className="w-full flex items-center justify-center px-5 gap-3">
          <NextButton action={action} />
          <SkipButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
