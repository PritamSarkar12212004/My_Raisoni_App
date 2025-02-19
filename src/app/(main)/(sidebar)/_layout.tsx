import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useLogout from "@/src/hooks/useLogout";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";

const _layout = () => {
  const router = useRouter();
  const { Logout } = useLogout();
  const { userDetails, headerName, profileImage } = userContext();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: "transparent",
          drawerActiveTintColor: "#7C73E6",
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(main)/Notification")}
              className="w-full flex items-end justify-center px-5"
            >
              <Ionicons name="notifications" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
        drawerContent={(props) => (
          <View className="w-full h-full bg-white/90 backdrop-blur-lg pt-20 pb-10 px-5 flex items-center">
            <View className="w-full items-center gap-4  py-4 bg-white rounded-3xl shadow-lg">
              <Image
                source={{ uri: profileImage }}
                className="w-48 h-48 rounded-3xl border-4 border-white"
                resizeMode="cover"
              />
              <Text className="text-lg font-bold text-gray-900">
                {userDetails.userFirstName} {userDetails.middleName}{" "}
                {userDetails.lastName}
              </Text>
              <Text className="text-gray-600">
                ID: {userDetails.registrationNumber}
              </Text>
              <Text className="text-gray-600">
                Roll No: {userDetails.rollNumber}
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              className="w-full mt-5"
            >
              <DrawerItemList {...props} />
            </ScrollView>
            <TouchableOpacity
              onPress={() => Logout()}
              activeOpacity={0.8}
              className="mt-5 w-full py-3 rounded-xl bg-red-500 flex items-center"
            >
              <Text className="text-lg font-bold text-white">Log Out</Text>
            </TouchableOpacity>
          </View>
        )}
      >
        {[
          {
            name: "(tabs)",
            title: "Home",
            icon: <Entypo name="home" size={25} color="white" />,
          },
          {
            name: "IdCard",
            title: "Student Id",
            icon: <Ionicons name="document" size={25} color="white" />,
          },
          {
            name: "MyAttendance",
            title: "Attendance",
            icon: <MaterialIcons name="emoji-people" size={25} color="white" />,
          },
          {
            name: "TimeTable",
            title: "Lecture",
            icon: (
              <MaterialCommunityIcons
                name="timetable"
                size={25}
                color="white"
              />
            ),
          },
          {
            name: "Fainance",
            title: "College Fee",
            icon: (
              <FontAwesome5 name="money-bill-alt" size={25} color="white" />
            ),
          },
          {
            name: "Document",
            title: "Document",
            icon: <Ionicons name="document" size={25} color="white" />,
          },
          {
            name: "ICardGenarator",
            title: "I Card",
            icon: <Ionicons name="document" size={25} color="white" />,
          },
        ].map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item.name}
            options={{
              title: item.title,
              drawerIcon: ({ focused }) => (
                <View className="w-full flex items-center justify-center">
                  <View
                    className={`w-full flex items-center px-5 gap-3 flex-row h-14 rounded-xl ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    }`}
                  >
                    {item.icon}
                    <Text className="text-lg tracking-widest text-white font-semibold">
                      {item.title}
                    </Text>
                  </View>
                </View>
              ),
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
