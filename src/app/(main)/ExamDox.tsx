import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadNavigation from "@/src/components/headNavigation/HeadNavigation";
import useExamDownloadHook from "@/src/hooks/downloadHooks/useExamDownloadHook";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";

const ExamDox = () => {
  const [data, setdata] = useState([]);
  const { apiCaller } = useExamDownloadHook();
  useEffect(() => {
    apiCaller({ data, setdata });
  }, []);
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full px-2 py-2">
        <HeadNavigation title={"Exam Documents"} />
        {data.length > 0 ? (
          <View className=" px-2  mt-5 ">
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item: any, index: any) => index}
              data={data}
              renderItem={({ item }: any) => (
                <View className="w-full flex-row relative py-4 px-4 bg-[#9CACFF] flex gap-2  rounded-3xl mb-4">
                  <View>
                    <View className=" flex-row items-center justify-between">
                      <View className="flex-row items-center justify-center gap-2">
                        <Ionicons name="document" size={65} color="white" />
                        <Text className="text-black text-2xl font-bold">
                          {item.semesterName}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text className="text-white text-xl font-bold">
                          <Text className="text-black">Session</Text> :{" "}
                          {item.dataList[0].sessionName}
                        </Text>
                        <Text className="text-white text-2xl font-bold">
                          <Text className="text-black">Session</Text> :{" "}
                          {item.dataList[0].sessionStartDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className=" flex-auto items-end  justify-between">
                    <Text className=" text-sm">
                      session id :
                      <Text className="text-white">
                        {item.dataList[0].sessionId}
                      </Text>
                    </Text>
                    <TouchableOpacity className="w-16 h-16  bg-white rounded-full flex items-center justify-center">
                      <Feather name="download-cloud" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        ) : (
          <View className="w-full h-full flex items-center justify-center">
            <LottiAnimation
              width={300}
              height={300}
              path={Animation.Wallet}
              color={"white"}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExamDox;
