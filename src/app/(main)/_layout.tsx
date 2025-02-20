import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const _layout = () => {
  return (
    <>
      <StatusBar hidden={false} barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <MainLayout />
      </SafeAreaView>
    </>
  );
};

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(sidebar)" />
      <Stack.Screen
        name="PdfViewPage"
        options={{
          animation: "fade_from_bottom",
        }}
      />

      <Stack.Screen
        name="ShowNotification"
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ImageShowNotification"
        options={{
          animation: "simple_push",
        }}
      />
    </Stack>
  );
};

export default _layout;
