import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { userContext } from "@/src/context/ContextApi";

const ImageCard = ({ item }: any) => {
  const navigation = useNavigation();
  const { setimagecardValue } = userContext();
  return (
    <View className="w-full flex items-center justify-center px-2">
      <View className="w-full flex items-center justify-center p-2 bg-zinc-600 pb-5 pt-3  rounded-[30px]">
        <View className="w-full flex ">
          <View className="w-full h-64 rounded-[30px]  flex items-center justify-center">
            <Image
              source={{
                uri: item.images[0],
              }}
              className="w-full h-full rounded-[30px] object-cover"
            />
          </View>
          <View className="w-full px-4 pt-3">
            <Text className="text-zinc-300 text-3xl font-bold">
              {item.title}
            </Text>
            <Text className="text-zinc-300 text-sm mt-2 ">
              {item.small_description}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setimagecardValue(item);
                navigation.navigate("ImageShowNotification");
              }}
              className="w-full h-16 bg-blue-500 mt-10 flex items-center justify-center rounded-3xl"
            >
              <Text className="text-white text-2xl font-bold text-center ">
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageCard;
