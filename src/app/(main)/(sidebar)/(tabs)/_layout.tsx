import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon({ focused }) {
            return (
              <View className="h-10 w-10 flex items-center justify-center">
                <Entypo
                  name="home"
                  size={35}
                  color={focused ? "#A294F9" : "gray"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: "About",
          tabBarIcon({ focused }) {
            return (
              <View className="h-10 w-10 flex items-center justify-center">
                <AntDesign
                  name="infocirlce"
                  size={30}
                  color={focused ? "#A294F9" : "gray"}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "white",
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: "transparent",

    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default _layout;
