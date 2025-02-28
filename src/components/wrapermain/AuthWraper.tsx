import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthWraper = ({ children }: any) => {
  return (
    <>
      <View className="w-full h-full flex bg-black">
        <SafeAreaView>{children}</SafeAreaView>
      </View>
    </>
  );
};

export default AuthWraper;
