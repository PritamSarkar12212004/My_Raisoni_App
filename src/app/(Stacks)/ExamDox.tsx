import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadNavigation from "@/src/components/headNavigationForPdf/HeadNavigation";
import useExamDownloadHook from "@/src/hooks/downloadHooks/useExamDownloadHook";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import useExamMainDownload from "@/src/hooks/downloadHooks/useExamMainDownload";
import { useRouter } from "expo-router";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";

const ExamDox = () => {
  const { exmamMainDownload } = useExamMainDownload();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const { apiCaller } = useExamDownloadHook();
  useEffect(() => {
    apiCaller({ data, setdata });
  }, []);
  const downloaderFunc = (item: any) => {
    setloading(item.dataList[0].semesterId);
    exmamMainDownload({ item: item, setloading });
  };
  return (
    <SubPageWraper>
      <NotificationHeader title={"Score card"} />
      <SafeAreaView className="w-full h-full">
        <View className="w-full">
          {data.length > 0 ? (
            <View className="   ">
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
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => (loading ? null : downloaderFunc(item))}
                        className="w-16 h-16  bg-white rounded-full flex items-center justify-center"
                      >
                        {loading === item.dataList[0].semesterId ? (
                          <ActivityIndicator size="small" color="#0000ff" />
                        ) : (
                          <Feather name="download" size={24} color="black" />
                        )}
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
                color={"#21242C"}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </SubPageWraper>
  );
};

export default ExamDox;
