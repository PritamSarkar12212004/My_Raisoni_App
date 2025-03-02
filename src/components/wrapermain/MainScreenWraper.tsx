import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainScreenWraper = ({ children }: any) => {
  return (
    <View className="w-full h-full flex pt-3 bg-[#21242C] ">
      <SafeAreaView className="px-3 ">
        <View style={{ flex: 1 }}></View>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainScreenWraper;
