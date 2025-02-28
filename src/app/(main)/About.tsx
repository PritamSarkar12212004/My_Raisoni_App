import React from "react";
import { View, Text, ScrollView } from "react-native";
import { userContext } from "@/src/context/ContextApi";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import MainScreenWraper from "@/src/components/wrapermain/MainScreenWraper";
import MainHeader from "@/src/components/Header/MainHeader";

const About = () => {
  const route = useRoute();
  const { setheaderName } = userContext();

  useFocusEffect(
    React.useCallback(() => {
      setheaderName("About");
    }, [])
  );

  // List of technologies used based on provided details
  const technologies = [
    "React Native",
    "Expo Router",
    "Dev Client",
    "NativeWind (Design Tool)",
    "Multiple Libraries",
    "Express.js (Backend)",
    "Axios (for API calls)",
    "Ghrua API integration",
  ];

  return (
    <MainScreenWraper>
      <MainHeader />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className=" pt-2 "
        showsVerticalScrollIndicator={false}
      >
        <View className=" ">
          {/* App Information Card */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6 mb-6">
            <Text className="text-2xl font-semibold  mb-4 text-white">
              App Information
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">App Name: </Text>
              MyRaisoni
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">College: </Text>
              G.H. Raisoni Amravati
            </Text>
            <Text className="text-lg text-white">
              <Text className="font-bold">Education: </Text>
              BCA (2nd Year)
            </Text>
          </View>

          {/* Developer Details Card */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6 mb-6">
            <Text className="text-2xl font-semibold text-green-600 mb-4">
              Developer Details
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold text-white">Name: </Text>
              Pritam Sarkar
            </Text>
            <Text className="text-lg text-white">
              Full stack developer specializing in React Native and web
              development.
            </Text>
          </View>

          {/* Technologies Used Card */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6">
            <Text className="text-2xl font-semibold text-white mb-4">
              Technologies Used
            </Text>
            {technologies.map((tech, index) => (
              <Text key={index} className="text-base text-white mb-1">
                • {tech}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </MainScreenWraper>
  );
};

export default About;
