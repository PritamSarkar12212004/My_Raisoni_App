import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const MainHeader = () => {
  const { userDetails, profileImage } = userContext();

  const router = useRouter();
  return (
    <View className="w-full flex items-center justify-between flex-row pb-2">
      <TouchableOpacity
        className="flex-row items-center justify-center gap-4"
        activeOpacity={0.8}
      >
        <View className="">
          <Image
            source={{
              uri: profileImage,
            }}
            className="h-16 w-16 rounded-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex">
          <Text className="text-xl  text-gray-400 tracking-tighter">
            Welcome back
          </Text>
          <Text className="text-white font-bold text-xl">
            {userDetails.userFirstName}
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-3">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            router.push("/(Stacks)/Notification");
          }}
          className="h-14 w-14 border-[2px] border-gray-400 rounded-full flex items-center justify-center"
        >
          <Ionicons name="notifications-sharp" size={24} color="#FAFDFF" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            router.push("/(Stacks)/TimeTable");
          }}
          className="h-14 w-14 border-[2px] border-gray-400 rounded-full flex items-center justify-center"
        >
          <Entypo name="calendar" size={24} color="#FAFDFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
