import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PaiChart2 from "../../Paichart/PaiChart2";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const MainScroeCard = () => {
  const { attendanceDataMain } = userContext();
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/(Stacks)/MyAttendance")}
      activeOpacity={0.8}
      className=" bg-[#FECA1F] rounded-3xl p-5 flex-row items-center justify-between"
    >
      <View>
        <Text className="text-3xl  font-extrabold text-wrap">Student</Text>
        <Text className="text-3xl  font-extrabold text-wrap">Attendance</Text>
      </View>
      <View>
        <PaiChart2
          title="Present"
          init={100}
          fainal={parseFloat(attendanceDataMain.presentPerc)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MainScroeCard;
