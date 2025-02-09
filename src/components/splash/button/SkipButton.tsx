import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const SkipButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.replace("/(auth)")}
      className="w-full flex items-center justify-center h-12"
      activeOpacity={0.8}
    >
      <Text className="text-zinc-800/70 font-bold text-center text-xl">
        Skip
      </Text>
    </TouchableOpacity>
  );
};

export default SkipButton;
