import React from "react";
import { View, Text, ScrollView } from "react-native";
import { userContext } from "@/src/context/ContextApi";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";

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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-gray-100 px-4 py-6"
    >
      <View className="flex-1">
        {/* App Information Card */}
        <View className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Text className="text-2xl font-semibold text-indigo-600 mb-4">
            App Information
          </Text>
          <Text className="text-lg text-gray-700 mb-2">
            <Text className="font-bold">App Name: </Text>
            MyRaisoni
          </Text>
          <Text className="text-lg text-gray-700 mb-2">
            <Text className="font-bold">College: </Text>
            G.H. Raisoni Amravati
          </Text>
          <Text className="text-lg text-gray-700">
            <Text className="font-bold">Education: </Text>
            BCA (2nd Year)
          </Text>
        </View>

        {/* Developer Details Card */}
        <View className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Text className="text-2xl font-semibold text-green-600 mb-4">
            Developer Details
          </Text>
          <Text className="text-lg text-gray-700 mb-2">
            <Text className="font-bold">Name: </Text>
            Pritam Sarkar
          </Text>
          <Text className="text-lg text-gray-700">
            Full stack developer specializing in React Native and web
            development.
          </Text>
        </View>

        {/* Technologies Used Card */}
        <View className="bg-white rounded-xl shadow-lg p-6">
          <Text className="text-2xl font-semibold text-blue-600 mb-4">
            Technologies Used
          </Text>
          {technologies.map((tech, index) => (
            <Text key={index} className="text-base text-gray-700 mb-1">
              • {tech}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
