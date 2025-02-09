import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorConstant from "@/src/constants/ColorConstant";
import NextButton from "@/src/components/splash/button/NextButton";
import SkipButton from "@/src/components/splash/button/SkipButton";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import { useRouter } from "expo-router";

const SecoundSplah = () => {
  const router = useRouter();
  const action = () => {
    router.replace("/(auth)");
  };
  return (
    <SafeAreaView
      className="w-full h-full "
      style={{ backgroundColor: ColorConstant.splash2 }}
    >
      <View className="w-full h-full flex items-center justify-between pb-3">
        <View />
        <View className="w-full  gap-10  flex-auto flex items-center justify-center">
          <LottiAnimation
            height={300}
            width={300}
            color={ColorConstant.splash2}
            path={Animation.Splash2Animation}
          />
          <View className="w-full flex items-center justify-center px-6 ">
            <Text className="  font-bold tracking-widest text-center">
              Your one-stop solution for all things Raisoni. Stay connected with
              campus updates, student information, and academic tools—all in one
              app.
            </Text>
          </View>
        </View>
        <View className="w-full flex items-center justify-center px-5 gap-3">
          <NextButton action={action} />
          <SkipButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecoundSplah;
