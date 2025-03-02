import { View, Text, ScrollView, Image } from "react-native";
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

const index = () => {
  const { setheaderName } = userContext();
  const { ApicallAttendance } = usettendanceCall();
  const { ApiStudentFeesCall } = useStudentFeesCall();
  const { ApiTimeTableCall } = useTitmeTableCall();
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
        <View className="w-full flex-row items-center px-2 mt-5  justify-between flex-wrap mb-56">
          {ReviewCardData.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </View>
      </ScrollView>
    </MainScreenWraper>
  );
};

export default index;
