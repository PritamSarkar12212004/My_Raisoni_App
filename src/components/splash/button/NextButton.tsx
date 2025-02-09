import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const NextButton = ({ action }: any) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      activeOpacity={0.8}
      className="w-full flex h-14 bg-zinc-900/80  backdrop-blur-sm  rounded-xl  items-center justify-center"
    >
      <Text className="text-white font-bold  text-center text-2xl">Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
