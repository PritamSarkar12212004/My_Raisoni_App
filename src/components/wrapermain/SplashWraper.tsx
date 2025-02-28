import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashWraper = ({ children }: any) => {
  return (
    <View className="w-full h-full flex bg-[#336DF6] px-3 pt-3 pb-10">
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default SplashWraper;
