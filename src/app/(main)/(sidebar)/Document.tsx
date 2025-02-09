import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import { useRouter } from "expo-router";
const Document = () => {
  const router = useRouter();
  return (
    <ScrollView className="w-full  bg-white">
      <View className="w-full h-full flex px-2  items-center justify-center py-10 bg-white ">
        <View className="w-full h-[80vh] bg-[#9CACFF] rounded-[40px] flex  justify-between">
          <View className="w-full  pt-10 px-5 flex-row items-center justify-between ">
            <Text className="text-3xl text-white font-semibold tracking-widest">
              Fainance
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(main)/FainanceDoc")}
              className="h-16 w-16 bg-white rounded-full flex items-center justify-center"
            >
              <Feather name="arrow-up-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="w-full bg-[#FFCC90] h-[85%] rounded-[40px] flex items-center justify-between">
            <View className="w-full  pt-10 px-5 flex-row items-center justify-between ">
              <Text className="text-3xl text-white font-semibold tracking-widest">
                Exam
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(main)/ExamDox")}
                className="h-16 w-16 bg-white rounded-full flex items-center justify-center"
              >
                <Feather name="arrow-up-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="w-full h-[80%] bg-[#7FD9B8] flex rounded-[40px] items-center justify-between">
              <View className="w-full  pt-10 px-5 flex-row items-center justify-between ">
                <Text className="text-3xl text-white font-semibold tracking-widest">
                  Other
                </Text>
                <TouchableOpacity className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                  <Feather name="arrow-up-right" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View className="w-full h-[80%] bg-[#DD87B0] flex rounded-[40px] items-center justify-center">
                <LottiAnimation
                  path={Animation.Wallet}
                  width={300}
                  height={300}
                  color={"#DD87B0"}
                />
                <Text className="text-2xl text-white font-extrabold">
                  We are working on it
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Document;
