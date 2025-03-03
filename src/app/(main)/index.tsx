import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Header from "@/src/components/main/header/Header";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { userContext } from "@/src/context/ContextApi";
import PaiChart2 from "@/src/components/Paichart/PaiChart2";
import usettendanceCall from "@/src/hooks/usettendanceCall";
import useTitmeTableCall from "@/src/hooks/useTitmeTableCall";
import useStudentFeesCall from "@/src/hooks/useStudentFeesCall";
import { useFocusEffect } from "expo-router";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import MainHeader from "@/src/components/Header/MainHeader";
import MainScreenWraper from "@/src/components/wrapermain/MainScreenWraper";
import MainScroeCard from "@/src/components/card/main/MainScroeCard";
import CgpaCard from "@/src/components/card/main/CgpaCard";
import ReviewCard from "@/src/components/card/main/ReviewCard";
import ReviewCardData from "@/src/demo/ReviewCardData";
import useLogout from "@/src/hooks/useLogout";

const index = () => {
  const { setheaderName } = userContext();
  const { ApicallAttendance } = usettendanceCall();
  const { ApiStudentFeesCall } = useStudentFeesCall();
  const { ApiTimeTableCall } = useTitmeTableCall();
  const { Logout } = useLogout();
  useEffect(() => {
    ApicallAttendance();
    ApiTimeTableCall();
    ApiStudentFeesCall();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      setheaderName("Home");
    }, [])
  );
  return (
    <MainScreenWraper>
      <MainHeader />
      <ScrollView
        className="w-full h-full "
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 w-full flex mt-3">
          <MainScroeCard />
        </View>
        <View className="flex-1 w-full flex mt-3">
          <CgpaCard />
        </View>
        <View className="w-full flex-row items-center px-2 mt-5  justify-between flex-wrap ">
          {ReviewCardData.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </View>
        <View className="w-full flex items-center justify-center px-10">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Logout()}
            className="w-full mb-56 mt-10 bg-red-500 flex py-4 rounded-full items-center  justify-center"
          >
            <Text className="text-2xl font-semibold text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainScreenWraper>
  );
};

export default index;
