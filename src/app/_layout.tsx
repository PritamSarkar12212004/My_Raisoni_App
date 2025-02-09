import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import "../../global.css";

import React from "react";
import { ContextProvider } from "../context/ContextApi";

const _layout = () => {
  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  );
};
const MainLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
