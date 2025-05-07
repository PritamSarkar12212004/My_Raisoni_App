import React from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
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

  const technologies = [
    "React Native",
    "Expo Router",
    "Dev Client",
    "NativeWind (Design Tool)",
    "Multiple Libraries",
    "Express.js (Backend)",
    "Axios (for API calls)",
    "Ghrua API integration",
    "Deep Linking",
  ];

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Can't open this URL: " + url);
    }
  };

  return (
    <MainScreenWraper>
      <MainHeader />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center">
          {/* Developer Image */}
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/149158676?v=4", // Replace with your actual image URL
            }}
            className="w-32 h-32 rounded-full mb-4"
            resizeMode="cover"
          />

          {/* App Info */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6 mb-3 w-11/12">
            <Text className="text-2xl font-semibold mb-4 text-white">
              App Information
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">App Name: </Text>MyRaisoni
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">College: </Text>G.H. Raisoni Amravati
            </Text>
            <Text className="text-lg text-white">
              <Text className="font-bold">Education: </Text>BCA (2nd Year)
            </Text>
          </View>

          {/* Developer Info */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6 mb-6 w-11/12">
            <Text className="text-2xl font-semibold text-green-600 mb-4">
              Developer Details
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">Name: </Text>Pritam Sarkar
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">Section: </Text>C
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">College: </Text>G.H. Raisoni, Amravati
            </Text>
            <Text className="text-lg text-white mb-2">
              <Text className="font-bold">Course: </Text>BCA
            </Text>
            <Text className="text-lg text-white mb-4">
              Full stack developer specializing in React Native and web
              development.
            </Text>

            {/* Deep Links */}
            <TouchableOpacity
              onPress={() => openLink("https://github.com/PritamSarkar12212004")}
            >
              <Text className="text-blue-400 underline text-base mb-2">
                GitHub: PritamSarkar12212004
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink("https://www.linkedin.com/in/pritam-sarkar-a65129358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ")}
            >
              <Text className="text-blue-400 underline text-base">
                LinkedIn: Pritam Sarkar
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tech Used */}
          <View className="bg-zinc-700 rounded-xl shadow-lg p-6 w-11/12 mb-56">
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
