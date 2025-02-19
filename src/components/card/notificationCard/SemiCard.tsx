import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { userContext } from "@/src/context/ContextApi";
import { useNavigation } from "expo-router";
const SemiCard = ({ item }) => {
  const [show, setshow] = useState(null);
  const { setimagecardValue } = userContext();
  const navigation = useNavigation();

  return (
    <View className="w-full flex items-center justify-center px-3">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setshow(item._id);
        }}
        className="w-full h-64 bg-zinc-900/50 rounded-[30px]  relative flex items-center justify-between"
      >
        <Image
          source={{ uri: item.images[0] }}
          className="w-full h-full rounded-[30px]"
          resizeMode="cover"
        />
        <View className="w-full h-16  absolute bottom-3 flex px-4 flex-row items-center justify-between ">
          {show === item._id && (
            <View className="w-full h-full flex-row items-center justify-between px-2  rounded-[30px] bg-zinc-900/60">
              <View className="h-full flex items-center justify-center">
                <Text className="text-white text-xl font-bold">
                  {item.title}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setimagecardValue(item);
                  navigation.navigate("ImageShowNotification");
                }}
                className=" h-14 w-14 bg-zinc-900 rounded-full flex items-center justify-center"
              >
                <Feather name="arrow-up-right" size={30} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SemiCard;
