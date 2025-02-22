import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const _layout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false  }} >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
