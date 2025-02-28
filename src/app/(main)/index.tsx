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
  const {
    castAndReligion,
    courseDetails,
    idDetails,
    userDetails,
    attendanceDataMain,
    setheaderName,
  } = userContext();
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
        {/* {userDetails && courseDetails ? (
          <View className="w-full h-full  flex gap-2  ">
            <Header />
            <View
              className="
          w-full gap-5 flex mt-8 items-center justify-center"
            >
              <View className="w-full flex items-center justify-center gap-3 ">
                <Text className="text-2xl font-semibold text-wrap text-center">
                  {courseDetails.branchName}
                </Text>
                <View className="w-full flex-row items-center justify-between">
                  <PaiChart2
                    title="CGPA"
                    init={10}
                    fainal={parseFloat(courseDetails.cgpaData)}
                  />
                  <PaiChart2
                    title="Present"
                    init={100}
                    fainal={parseFloat(attendanceDataMain.presentPerc)}
                  />
                </View>

                <View className="w-full mt-2 flex border-[1px] rounded-[25px] bg-[#FF4800] p-5 border-zinc-200">
                  <Text className="text-lg font-bold text-white">
                    Session Detiles
                  </Text>
                  <View className="w-full mt-2  text-white  ">
                    <Text className="text-lg  text-white  font-semibold">
                      Year:
                      <Text className="font-semibold text-white">
                        {courseDetails.yearName}
                      </Text>
                    </Text>
                    <Text className="text-lg  text-white  font-semibold">
                      Semister:
                      <Text className="font-semibold text-white">
                        {courseDetails.semesterName}
                      </Text>
                    </Text>
                    <Text className="text-lg  text-white  font-semibold">
                      Section:
                      <Text className="font-semibold text-white">
                        {courseDetails.sectionName}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>

              <View className="w-full gap-2  rounded-[30px] bg-[#D1F801] flex p-10">
                <Text className="text-2xl font-bold tracking-widest">
                  Contact Detiles
                </Text>
                <View className="w-full flex gap-3">
                  <View className="w-full flex-row gap-3 items-center">
                    <View>
                      <Feather name="phone-call" size={24} color="black" />
                    </View>
                    <Text className="text-lg  font-semibold">
                      {userDetails.mobileNumber}
                    </Text>
                  </View>
                  <View className="w-full flex-row gap-3 items-center">
                    <View>
                      <MaterialIcons name="email" size={24} color="black" />
                    </View>
                    <Text className="text-lg  font-semibold">
                      {userDetails.personalEmail}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="w-full gap-2  rounded-[30px] bg-[#4C5F7F] flex p-10">
                <View className="w-full flex ">
                  <Text className="text-2xl font-extrabold tracking-widest text-white">
                    Information
                  </Text>
                </View>
                <View className="w-full  flex gap-2">
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Date Of Birth : {userDetails.dateOfBirth}
                  </Text>
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Batch Time : {idDetails.admissionBatchName}
                  </Text>
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Admition Date : {courseDetails.dateOfAdmission}
                  </Text>
                </View>
              </View>
              <View className="w-full gap-2  rounded-[30px] bg-[#F67F00] flex p-10">
                <Text className="text-2xl font-bold text-white">
                  Cast Religion
                </Text>
                <View className="w-full flex">
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Nationality : {castAndReligion.nationalityName}
                  </Text>
                </View>
                <View className="w-full flex">
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Religion : {castAndReligion.religionName}
                  </Text>
                </View>
                <View className="w-full flex">
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Cast : {castAndReligion.casteName}
                  </Text>
                </View>
                <View className="w-full flex">
                  <Text className="text-lg  tracking-widest font-semibold text-white">
                    Category : {castAndReligion.categoryName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View className="w-full h-full flex items-center justify-center">
            <LottiAnimation
              path={Animation.FetchData}
              color={"white"}
              width={200}
              height={200}
            />
          </View>
        )} */}
      </ScrollView>
    </MainScreenWraper>
  );
};

export default index;
