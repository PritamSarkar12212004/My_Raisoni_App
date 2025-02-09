import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { userContext } from "@/src/context/ContextApi";

const SigInButton = ({ Apicall }: any) => {
  const { loader } = userContext();

  return (
    <TouchableOpacity
      onPress={() => Apicall()}
      activeOpacity={0.8}
      className="w-full h-16 bg-zinc-800/90 backdrop-blur-smvflex items-center justify-center rounded-xl"
    >
      {loader ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Text className="text-white text-2xl font-extrabold">Sign In</Text>
      )}
    </TouchableOpacity>
  );
};

export default SigInButton;
