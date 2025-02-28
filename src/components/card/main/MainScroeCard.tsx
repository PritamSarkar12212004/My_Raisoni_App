import { View, Text } from "react-native";
import React from "react";
import PaiChart2 from "../../Paichart/PaiChart2";
import { userContext } from "@/src/context/ContextApi";

const MainScroeCard = () => {
  const { attendanceDataMain } = userContext();
  return (
    <View className=" bg-[#FECA1F] rounded-3xl p-5 flex-row items-center justify-between">
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
    </View>
  );
};

export default MainScroeCard;
