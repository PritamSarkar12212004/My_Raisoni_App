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
          drawerActiveTintColor: "transparent",
          headerRight(props) {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.push("/(main)/Notification")}
                className="w-full flex items-end justify-center px-5"
              >
                <Entypo name="notification" size={24} color="red" />
              </TouchableOpacity>
            );
          },
        }}
        drawerContent={(props) => {
          return (
            <View className="w-full items-center justify-between h-full  flex bg-zinc-200 backdrop-blur-lg  relative pt-20 pb-10">
              <View className="w-full flex items-center justify-center gap-10">
                <View className=" px-10 py-5 rounded-[40px] gap-2 flex items-center justify-center bg-zinc-100">
                  <Image
                    source={{
                      uri: profileImage,
                    }}
                    className="w-44 h-44 rounded-2xl"
                    resizeMode="cover"
                  />
                  <Text className="  font-medium  tracking-widest">
                    {userDetails.userFirstName} {userDetails.middleName}
                    {userDetails.lastName}
                  </Text>
                  <View className="flex  w-full  items-center justify-center">
                    <Text className=" tracking-widest">
                      ID : {userDetails.registrationNumber}
                    </Text>
                    <Text className="tracking-widest">
                      Roll No : {userDetails.rollNumber}
                    </Text>
                  </View>
                </View>
                <View className="w-full ">
                  <View className="w-full flex items-center justify-center"></View>
                  <ScrollView className="w-full">
                    <View className="w-full flex items-center justify-center ">
                      <DrawerItemList {...props} />
                      <View className="w-full flex items-center justify-center px-10 ">
                        <TouchableOpacity
                          onPress={() => Logout()}
                          activeOpacity={0.8}
                          className=" w-full flex py-4 rounded-3xl bg-red-500 items-center justify-center"
                        >
                          <Text className="text-2xl font-bold text-white ">
                            Log Out
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          );
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: headerName,
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <Entypo name="home" size={25} color="white" />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Home
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="IdCard"
          options={{
            title: "Student Id",
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <Ionicons name="document" size={25} color="white" />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Student Id
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="MyAttendance"
          options={{
            title: "Attendance",
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <MaterialIcons
                        name="emoji-people"
                        size={25}
                        color="white"
                      />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Attendance
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="TimeTable"
          options={{
            title: "Lecture",
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <MaterialCommunityIcons
                        name="timetable"
                        size={25}
                        color="white"
                      />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Lecture
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Fainance"
          options={{
            title: "Fainance",
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <FontAwesome5
                        name="money-bill-alt"
                        size={25}
                        color="white"
                      />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Collage Fee
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Document"
          options={{
            title: "Document",
            drawerIcon({ focused }) {
              return (
                <View className="w-full flex items-center justify-center px-5">
                  <View
                    className={`w-full flex items-center  px-5 gap-3 flex-row  h-14 rounded-xl  ${
                      focused ? "bg-[#7C73E6]" : "bg-orange-500"
                    } `}
                  >
                    <View>
                      <Ionicons name="document" size={25} color="white" />
                    </View>
                    <Text className="text-lg tracking-widest text-white  font-semibold">
                      Document
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
