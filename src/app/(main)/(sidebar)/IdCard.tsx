import { View, Text, ScrollView } from "react-native";
import React from "react";
import { userContext } from "@/src/context/ContextApi";
// 28B4AD
const IdCard = () => {
  const { idDetails } = userContext();
  return (
    <ScrollView>
      <View className="w-full h-full flex gap-5 p-5 bg-white">
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#FDDB3B] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl font-extrabold  leading-tight ">
                {idDetails.nationalityId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Nationality ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#4F48ED] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.religionId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Religion ID</Text>
          </View>
        </View>
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#4F48ED] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.casteId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Cast ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#28B4AD] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.categoryId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Category ID</Text>
          </View>
        </View>
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#0078FF] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.branchId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Branch ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#FE6D74] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.degreeId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Degree ID</Text>
          </View>
        </View>
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#FDDB3B] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl font-extrabold  leading-tight ">
                {idDetails.schemeId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Scheme ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#4F48ED] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.sessionId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Session ID</Text>
          </View>
        </View>
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#4F48ED] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.semesterId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Semester ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#28B4AD] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.yearId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Year ID</Text>
          </View>
        </View>
        <View className="w-full flex-row items-center gap-2 justify-between">
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#0078FF] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.sectionId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">Section ID</Text>
          </View>
          <View className="w-[48%] gap-2 flex items-center justify-center">
            <View className=" h-36 w-full bg-[#FE6D74] rounded-3xl flex items-center justify-center">
              <Text className="text-6xl text-white font-extrabold  leading-tight ">
                {idDetails.admissionBatchId}
              </Text>
            </View>
            <Text className="text-lg font-semibold">AdmissionBatch ID</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default IdCard;
