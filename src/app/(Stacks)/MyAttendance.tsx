import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import usettendanceCall from "@/src/hooks/usettendanceCall";
import { userContext } from "@/src/context/ContextApi";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import PaiChart from "@/src/components/Paichart/PaiChart";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import BarCharts from "@/src/components/Paichart/BarCharts";

const MyAttendance = () => {
  const { attendance } = userContext();

  const { ApicallAttendance } = usettendanceCall();
  useEffect(() => {
    ApicallAttendance();
  }, []);

  return (
    <SubPageWraper>
      <NotificationHeader title="My Attendance" />
      <ScrollView
        className="w-full h-full flex  "
        showsVerticalScrollIndicator={false}
      >
        {attendance ? (
          <View className="w-full h-full flex  ">
            <View className="w-full flex items-center justify-center mb-5">
              <BarCharts data={attendance.attendanceData} />
            </View>
            <View className="w-full  mb-40  ">
              <FlatList
                showsVerticalScrollIndicator={false}
                data={attendance.attendanceData}
                renderItem={({ item }) => (
                  <View className="w-full  px-3 py- flex-row items-center justify-between  rounded-[30px] bg-[#768cf8] shadow-[40px] backdrop-blur-sm mb-4">
                    <View className=" flex  w-[60%] ">
                      <Text className=" font-bold text-white">
                        {item.courseName}
                      </Text>
                      <Text className=" text-black">
                        Course Id : {item.courseId}
                      </Text>
                      <Text className="  text-black">
                        Course Code : {item.courseCode}
                      </Text>
                    </View>
                    <View className=" flex items-center justify-center">
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
                      <View className=" flex items-center justify-center">
                        <Text className=" font-thin text-black">
                          Total lecture :
                          {
                            item.attendanceCourseComponentNameInfoList[0]
                              .numberOfPeriods
                          }
                        </Text>
                        <Text className=" font-thin text-black">
                          Present :
                          {
                            item.attendanceCourseComponentNameInfoList[0]
                              .numberOfPresent
                          }
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View className="w-full h-full flex items-center justify-center ">
            <LottiAnimation
              path={Animation.FetchData}
              height={300}
              width={300}
              color={"#21242C"}
            />
          </View>
        )}
      </ScrollView>
    </SubPageWraper>
  );
};

export default MyAttendance;
