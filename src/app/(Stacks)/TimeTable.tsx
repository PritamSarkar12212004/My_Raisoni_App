import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useTitmeTableCall from "@/src/hooks/useTitmeTableCall";
import { userContext } from "@/src/context/ContextApi";
import TimeTableCard from "@/src/components/timeTable/TimeTableCard";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import SubPageHeader from "@/src/components/Header/SubPageHeader";
import NotificationHeader from "@/src/components/Head/NotificationHeader";

const TimeTable = () => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const { ApiTimeTableCall } = useTitmeTableCall();
  const { timetable } = userContext();

  const [filteredData, setFilteredData] = useState([]);
  const [currentTime, setCurrentTime] = useState(null);
  const [weekDetails] = useState(null); // Fixing incorrect useState initialization

  // ✅ Filter timetable for today's lectures safely
  const arrayShorter = () => {
    if (!timetable || timetable.length === 0) return; // Ensure timetable exists

    const filteredLecturesForToday = timetable.filter((item) => {
      if (!item.dateTime) return false; // Avoid errors on missing dateTime

      const lectureDate = item.dateTime.split(" : ")[0]; // Extract date
      const [day, month, year] = lectureDate.split("/"); // Split into [day, month, year]
      const formattedDate = `${year}-${month}-${day}`; // Format: YYYY-MM-DD

      return formattedDate === currentTime; // Compare formatted dates
    });

    setFilteredData(filteredLecturesForToday);
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setCurrentTime(currentDate);

    // Fetch timetable data when component mounts
    ApiTimeTableCall();
  }, []);

  useEffect(() => {
    // Run arrayShorter only when timetable data is available
    if (timetable && timetable.length > 0) {
      arrayShorter();
    }
  }, [timetable, weekDetails, currentTime]);

  return (
    <SubPageWraper>
      <NotificationHeader title={"Attendance"} />
      <ScrollView
        className="w-full flex"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full py-5 flex-1 flex gap-3 mb-44">
          {timetable && (
            <>
              <Text className="text-4xl font-bold text-[#336DF6]">{month}</Text>
              <TimeTableCard
                setCurrentTime={setCurrentTime}
                currentTime={currentTime}
              />
              <View className="w-full mt-5 flex">
                <Text className="text-[#336DF6] font-bold text-2xl">
                  Lecture
                </Text>
                <View className="flex w-full gap-10 mt-3">
                  {filteredData.length > 0 ? (
                    filteredData.map((lecture, index) => (
                      <View
                        className="w-full bg-[#313640] py-3 px-3  rounded-3xl flex gap-4"
                        key={index}
                      >
                        <View className="w-full flex-row items-center justify-between">
                          <View className="w-full flex-row items-center gap-3">
                            <View className="h-12 w-12 bg-[#336DF6] flex items-center justify-center rounded-lg">
                              <Text className="text-xl font-bold text-white">
                                {index + 1}
                              </Text>
                            </View>
                            <View>
                              <Text className="text-lg font-bold text-wrap text-white">
                                {lecture.courseName}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className="flex-row items-center gap-3">
                            <Feather
                              name="book-open"
                              size={24}
                              color="#FF6500"
                            />
                            <Text className="text-lg text-wrap text-white">
                              {lecture.facultyName}
                            </Text>
                          </View>
                          <View>
                            <Text className="text-lg font-bold text-wrap text-white">
                              {lecture.start?.split(" ")[1]?.slice(0, 5)}
                              <Text> To </Text>
                              {lecture.end?.split(" ")[1]?.slice(0, 5)}
                            </Text>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className="flex-row items-center gap-3">
                            <Feather name="code" size={24} color="#7A1CAC" />
                            <Text className="text-lg text-wrap text-white">
                              <Text>Course Code</Text> :{" "}
                              <Text className="text-white">
                                {lecture.courseCode}
                              </Text>
                            </Text>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className="flex-row items-center gap-3">
                            <Feather name="type" size={24} color="#FF204E" />
                            <Text className="text-lg text-wrap text-[#336DF6]">
                              <Text>Course Type</Text> :{" "}
                              <Text className="text-[#FF204E]">
                                {lecture.courseCompName}
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    ))
                  ) : (
                    <View className="w-full flex items-center justify-center">
                      <LottiAnimation
                        path={Animation.Alert}
                        color={"#21242C"}
                        width={300}
                        height={200}
                      />
                      <Text className="px-10 text-center text-lg font-semibold text-white">
                        There's probably no lecture today; maybe it's a{" "}
                        <Text className="text-blue-500 font-bold text-xl">
                          H
                        </Text>
                        oliday.
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SubPageWraper>
  );
};

export default TimeTable;
