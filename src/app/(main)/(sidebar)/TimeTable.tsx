import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useTitmeTableCall from "@/src/hooks/useTitmeTableCall";
import { userContext } from "@/src/context/ContextApi";
import TimeTableCard from "@/src/components/timeTable/TimeTableCard";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
const TimeTable = () => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const { ApiTimeTableCall } = useTitmeTableCall();
  const { timetable } = userContext();
  const [filteredData, setFilteredData] = useState([]);
  const [currentTime, setCurrentTime, weekDetails] = useState(null);
  console.log(filteredData);

  const arrayShorter = () => {
    const filteredLecturesForToday = timetable.filter((item) => {
      const lectureDate = item.dateTime.split(" : ")[0]; // Extract date part from "DD/MM/YYYY"
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
    <ScrollView className="w-full h-full flex bg-white">
      <View className="w-full py-5  h-full flex bg-white gap-3 px-3 mb-10 ">
        {timetable && (
          <>
            <Text className="text-4xl font-bold text-[#F0A04B]">{month}</Text>
            <TimeTableCard
              setCurrentTime={setCurrentTime}
              currentTime={currentTime}
            />
            <View className="w-full mt-5 flex">
              <Text className="text-[#7A1CAC] font-bold text-2xl">Lecture</Text>
              <View className="flex w-full gap-20 mt-3">
                {filteredData.length > 0 ? (
                  <>
                    {filteredData.map((lecture, index) => (
                      <View className="w-full flex gap-4" key={index}>
                        <View className="w-full flex-row items-center justify-between">
                          <View className="w-full flex-row items-center gap-3">
                            <View className="h-12 w-12 bg-[#EB3678]  flex items-center justify-center rounded-lg">
                              <Text className="text-xl font-bold text-white">
                                {index + 1}
                              </Text>
                            </View>
                            <View>
                              <Text className="text-lg font-bold text-wrap  text-black">
                                {lecture.courseName}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className=" flex-row items-center gap-3">
                            <Feather
                              name="book-open"
                              size={24}
                              color="#FF6500"
                            />
                            <Text className="text-lg text-wrap  text-[#2A004E]">
                              {lecture.facultyName}
                            </Text>
                          </View>
                          <View>
                            <Text className="text-lg   font-bold text-wrap  text-[#7A1CAC]">
                              {lecture.start.split(" ")[1].slice(0, 5)}
                              <Text> To </Text>
                              {lecture.end.split(" ")[1].slice(0, 5)}
                            </Text>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className=" flex-row items-center gap-3">
                            <Feather name="code" size={24} color="#7A1CAC" />
                            <Text className="text-lg text-wrap  text-[#2A004E]">
                              <Text>Course Code</Text> :{" "}
                              <Text className="text-[#2A004E]">
                                {lecture.courseCode}
                              </Text>
                            </Text>
                          </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between px-1">
                          <View className=" flex-row items-center gap-3">
                            <Feather name="type" size={24} color="#FF204E" />
                            <Text className="text-lg text-wrap  text-[#FF204E]">
                              <Text>Course Type</Text> :{" "}
                              <Text className="text-[#FF204E]">
                                {lecture.courseCompName}
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </>
                ) : (
                  <View className="w-full flex items-center justify-center">
                    <LottiAnimation
                      path={Animation.Alert}
                      color={"white"}
                      width={300}
                      height={200}
                    />
                    <Text className="px-10 text-center text-lg  font-semibold">
                      There's probably no lecture today; maybe it's a{" "}
                      <Text className="text-blue-500 font-bold text-xl">H</Text>
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
  );
};

export default TimeTable;
