import { View, Text, TouchableOpacity, Image, Touchable } from "react-native";
import React, { useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import { userContext } from "@/src/context/ContextApi";
const MainCard = ({ item }: any) => {
  const { setmaincardValue } = userContext();
  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      setmaincardValue(null);
    };
  }, []);
  return (
    <View className={`w-80 mr-5 h-[50vh] rounded-[40px]  relative`}>
      <View className="rounded-[40px] w-full h-full absolute top-0 left-0">
        <Image
          source={{
            uri: item.images[0],
          }}
          className="w-full h-full  rounded-[40px] "
        />
        <View className="w-full h-full rounded-[40px] bg-black/40 absolute top-0 left-0"></View>
      </View>
      <View className="w-full h-full rounded-[40px] p-5 flex  justify-between">
        <View className="w-full flex ">
          <Text className="text-white text-4xl font-bold">{item.title}</Text>
          <Text className="text-white  mt-2 ">{item.small_description}</Text>
        </View>
        <View></View>
        <View className="w-full flex items-end justify-center ">
          <TouchableOpacity
            onPress={() => {
              setmaincardValue(item);
              navigation.navigate("ShowNotification");
            }}
            activeOpacity={0.8}
            className="w-20 h-20 bg-white/60 rounded-full flex justify-center items-center"
          >
            <Feather name="arrow-up-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainCard;
