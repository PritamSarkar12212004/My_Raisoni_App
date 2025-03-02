import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { userContext } from "@/src/context/ContextApi";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const PersonlInformation = () => {
  const {
    castAndReligion,
    courseDetails,
    idDetails,
    userDetails,
    setheaderName,
    profileImage,
  } = userContext();
  return (
    <SubPageWraper>
      <NotificationHeader title="Personal Information" />
      <ScrollView>
        <View className="w-full flex h-full mb-40 gap-5 ">
          <View className="w-full flex items-center justify-center">
            <Image
              source={{
                uri: profileImage,
              }}
              className="h-56 w-56 rounded-3xl"
              resizeMode="cover"
            />
            <View className="w-full flex items-center justify-center mt-2">
              <Text className="text-white font-bold text-xl">
                {userDetails.userFirstName} {userDetails.middleName}{" "}
                {userDetails.lastName}{" "}
              </Text>
              <View className="mt-3 flex items-center justify-center">
                <Text className="font-semibold text-lg text-white">
                  Reg No : {userDetails.registrationNumber}
                </Text>
                <Text className="font-semibold text-lg text-white">
                  Roll No : {userDetails.rollNumber}
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full mt-2 flex  rounded-3xl p-5 bg-white/20 ">
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
          <View className="w-full gap-2  bg-white/20 rounded-3xl flex p-10">
            <Text className="text-2xl font-bold tracking-widest text-white">
              Contact Detiles
            </Text>
            <View className="w-full flex gap-3">
              <View className="w-full flex-row gap-3 items-center">
                <View>
                  <Feather name="phone-call" size={24} color="orange" />
                </View>
                <Text className="text-lg  font-semibold text-white">
                  {userDetails.mobileNumber}
                </Text>
              </View>
              <View className="w-full flex-row gap-3 items-center">
                <View>
                  <MaterialIcons name="email" size={24} color="orange" />
                </View>
                <Text className="text-lg  font-semibold text-white">
                  {userDetails.personalEmail}
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full gap-2  rounded-3xl bg-white/20 flex p-10">
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
          <View className="w-full gap-2  rounded-3xl bg-white/20 flex p-10">
            <Text className="text-2xl font-bold text-white">Cast Religion</Text>
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
      </ScrollView>
    </SubPageWraper>
  );
};

export default PersonlInformation;
