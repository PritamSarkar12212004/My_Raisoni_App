import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const ReviewCard = ({ item }: any) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/(Stacks)/${item.router}`)}
      activeOpacity={0.8}
      className="w-[48%] h-48 mb-5  flex items-center justify-center bg-[#313640] rounded-[30px] relative"
    >
      <View
        className="h-20 w-20 rounded-full  absolute right-[-5] top-[-5] border-4 flex items-center justify-center  border-[#21242C]"
        style={{ backgroundColor: item.color }}
      >
        <Entypo name={item.iconName} size={30} color="white" />
      </View>
      <View className="h-full w-full flex items-start justify-between px-7 py-10">
        <Text className="text-2xl text-white font-bold">{item.value}</Text>
        <View>
          <Text className="text-xl tracking-widest text-white font-bold">
            {item.title}
          </Text>
          <Text className=" tracking-tighter text-zinc-400">
            {item.subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;
