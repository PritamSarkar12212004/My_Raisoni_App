import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SubPageWraper = ({ children }) => {
  return (
    <View className="w-full h-full flex pt-3 bg-[#21242C] ">
      <SafeAreaView className="px-3 ">{children}</SafeAreaView>
    </View>
  );
};

export default SubPageWraper;
