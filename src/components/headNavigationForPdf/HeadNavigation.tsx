import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
const HeadNavigation = ({ title }: any) => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        className="h-14 w-14 rounded-full bg-zinc-100 flex items-center justify-center"
      >
        <Feather name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text className="text-xl font-bold">{title}</Text>
      <View className="h-14 w-14"></View>
    </View>
  );
};

export default HeadNavigation;
