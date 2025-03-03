import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PaiChart2 from "../../Paichart/PaiChart2";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const CgpaCard = () => {
  const { courseDetails } = userContext();
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/(Stacks)/ExamScore")}
      className=" bg-[#FECA1F] rounded-3xl p-5 flex-row items-center justify-between"
    >
      <View>
        <Text className="text-3xl  font-extrabold text-wrap">Student</Text>
        <Text className="text-3xl  font-extrabold text-wrap">CGPA</Text>
      </View>
      <View>
        <PaiChart2
          title="Present"
          init={100}
          fainal={parseFloat(
            ((parseFloat(courseDetails.cgpaData) / 10) * 100).toFixed(2)
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CgpaCard;
