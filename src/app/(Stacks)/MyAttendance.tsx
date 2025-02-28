import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect } from "react";
import usettendanceCall from "@/src/hooks/usettendanceCall";
import { userContext } from "@/src/context/ContextApi";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import PaiChart from "@/src/components/Paichart/PaiChart";

const MyAttendance = () => {
  const { attendance } = userContext();

  const { ApicallAttendance } = usettendanceCall();
  useEffect(() => {
    ApicallAttendance();
  }, []);

  return (
    <View className="w-full h-full flex  bg-white">
      {attendance ? (
        <View className="w-full h-full flex gap-5 ">
          <View className="w-full flex gap-3 h-full   px-3">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={attendance.attendanceData}
              renderItem={({ item }) => (
                <View className="w-full gap-3  rounded-[30px] p-7 shadow-[40px] backdrop-blur-sm mb-10">
                  <View className="w-full flex items-center justify-center">
                    <PaiChart
                      init={100}
                      fainal={Math.floor(
                        (item.attendanceCourseComponentNameInfoList[0]
                          .numberOfPresent /
                          item.attendanceCourseComponentNameInfoList[0]
                            .numberOfPeriods) *
                          100
                      )}
                    />
                    <View className="w-full flex items-center justify-center">
                      <Text className="text-xl font-bold text-black">
                        Total lecture :
                        {
                          item.attendanceCourseComponentNameInfoList[0]
                            .numberOfPeriods
                        }
                      </Text>
                      <Text className="text-2xl font-bold text-black">
                        Present :
                        {
                          item.attendanceCourseComponentNameInfoList[0]
                            .numberOfPresent
                        }
                      </Text>
                    </View>
                  </View>
                  <View className="w-full flex items-center justify-center ">
                    <Text className="text-2xl font-bold text-blue-500">
                      {item.courseName}
                    </Text>
                    <Text className="text-xl  text-black">
                      Course Id : {item.courseId}
                    </Text>
                    <Text className="text-xl  text-black">
                      Course Code : {item.courseCode}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <View className="w-full  h-full flex items-center justify-center ">
          <LottiAnimation
            path={Animation.FetchData}
            height={300}
            width={300}
            color={"white"}
          />
        </View>
      )}
    </View>
  );
};

export default MyAttendance;
