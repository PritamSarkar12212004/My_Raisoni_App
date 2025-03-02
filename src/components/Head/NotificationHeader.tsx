import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
const NotificationHeader = ({ title }: any) => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between pb-2 ">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full"
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <Text className="text-white text-2xl font-bold">{title}</Text>
      <View className="w-16 h-16"></View>
    </View>
  );
};

export default NotificationHeader;
