import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { userContext } from "@/src/context/ContextApi";

const TimeTableCard = ({ setCurrentTime, currentTime }: any) => {
  const { weekDetails } = userContext();

  return (
    <View className="w-full rounded-[30px] px-7 py-7 gap-5 bg-[#F0A04B]">
      <Text className="text-2xl tracking-widest text-white font-bold">
        Today
      </Text>
      <View className="w-full flex-row justify-between items-center">
        {weekDetails.weekdays.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCurrentTime(item.date)}
            key={index}
            className={`w-16 h-24 rounded-[60px]  flex items-center justify-center ${
              item.date === currentTime ? "bg-white" : "bg-[#FB773C]"
            } `}
          >
            <Text
              className={`text-3xl font-extrabold ${
                item.date === currentTime ? "text-black" : "text-white"
              } `}
            >
              {item.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="w-full flex items-end justify-center">
        <Text className=" text-white text-sm tracking-tighter font-bold">
          Week: {weekDetails.weekStart} to {weekDetails.weekEnd}
        </Text>
      </View>
    </View>
  );
};

export default TimeTableCard;
