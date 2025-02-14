import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";

const MaintanenceMode = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full h-full flex items-center justify-between py-10">
        <View className="w-full px-3 py-3 "></View>
        <LottiAnimation
          path={Animation.Mantainance}
          width={300}
          height={300}
          color={"white"}
        />
        <View className="w-full flex items-center justify-center">
          <Text className="text-2xl font-bold text-blue-500">
            We are under Maintanence
          </Text>
          <Text className="text-lg text-gray-500">We will be back soon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MaintanenceMode;
