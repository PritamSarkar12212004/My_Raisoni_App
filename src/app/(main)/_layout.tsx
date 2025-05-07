import React from "react";
import { Tabs } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const _layout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={"#21242C"} />
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
                    size={30}
                    color={focused ? "#A294F9" : "gray"}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="ICardGenarator"
          options={{
            title: "card",
            tabBarIcon({ focused }) {
              return (
                <View className="h-10 w-10 flex items-center justify-center">
                  <FontAwesome6
                    name="id-card-clip"
                    size={30}
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
    </>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 45,
    left: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 65,
    borderRadius: 100,
    backgroundColor: "#313640",
    borderWidth: 0,
    borderColor: "#313640",
    paddingBottom: 10,
    paddingTop: 10,
    backdropFilter: "blur(10px)",
  },
});

export default _layout;
