import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(sidebar)" />
      <Stack.Screen
        name="PdfViewPage"
        options={{
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
};

export default _layout;
