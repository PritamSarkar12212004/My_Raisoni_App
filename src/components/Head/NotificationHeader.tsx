import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "expo-router";
const NotificationHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between px-3 py-2 ">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full"
      >
        <EvilIcons name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <Text className="text-white text-2xl font-bold">Notification</Text>
      <View className="w-16 h-16"></View>
    </View>
  );
};

export default NotificationHeader;
