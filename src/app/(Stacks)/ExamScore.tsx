import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import useExamScorehook from "@/src/hooks/useExamScorehook";
import { userContext } from "@/src/context/ContextApi";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PaiChart from "@/src/components/Paichart/PaiChart";

const ExamScore = () => {
  const { examScore } = userContext();
  const { getExamScore } = useExamScorehook();
  useEffect(() => {
    getExamScore();
  }, []);
  return (
    <SubPageWraper>
      <NotificationHeader title="Exam Score" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full flex items-center justify-center mb-40">
          {examScore ? (
            <View className="w-full gap-10 h-full flex ">
              {examScore.map((item: any, index: any) => (
                <View key={index} className="w-full   ">
                  <View className="p-6 flex gap-2  px-4 bg-white/30 rounded-3xl relative">
                    <FontAwesome name="vcard" size={30} color="white" />
                    <View className=" ">
                      <Text className="text-xl text-white">
                        {item.regForSessionName}
                      </Text>
                      <Text className="text-xl text-white">
                        Semester {item.semesterName}
                      </Text>
                      <Text className="text-xl text-white">
                        Session Start Date {item.getSessionStartDate}
                      </Text>
                    </View>
                  </View>
                  <View className="w-full flex gap-3 mt-3">
                    {item.studentMarksDetailsDTO.map((item, index) => {
                      return (
                        <View
                          key={index}
                          className="w-full  px-4 py-2 flex-row items-center justify-between  rounded-3xl bg-[#768cf8] shadow-[40px] backdrop-blur-sm"
                        >
                          <View className=" flex  w-[70%] ">
                            <Text className=" font-bold text-lg text-white">
                              {item.courseName}
                            </Text>
                            <Text className=" text-black">
                              Course Id : {item.courseId}
                            </Text>
                            <Text className=" text-white/80 font-semibold">
                              Backlog:{item.backlog == "true" ? "yes" : "no"}
                            </Text>
                          </View>
                          <View className=" flex items-center justify-center">
                            <PaiChart
                              init={100}
                              fainal={
                                item.courseCompDTOList[0]
                                  .compSessionLevelMarks[0].percentage
                              }
                            />
                            <View className=" flex items-center justify-center">
                              <Text className=" font-thin text-black">
                                Total marks :
                                {
                                  item.courseCompDTOList[0]
                                    .compSessionLevelMarks[0].marksOutOf
                                }
                              </Text>
                              <Text className=" font-thin text-black">
                                Obtained :
                                {
                                  item.courseCompDTOList[0]
                                    .compSessionLevelMarks[0].marksObtained
                                }
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              ))}
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
      </ScrollView>
    </SubPageWraper>
  );
};

export default ExamScore;
