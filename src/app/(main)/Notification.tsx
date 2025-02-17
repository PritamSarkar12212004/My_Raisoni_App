import { View, Text, Image } from "react-native";
import React from "react";
import ImageConstant from "@/src/constants/ImageConstant";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  return (
    <View className="w-full h-full flex relative ">
      <Image
        source={ImageConstant.Notification}
        className="w-full h-full absolute top-0 left-0"
      />
      <View
        className="w-full h-full absolute top-0 left-0 backdrop-blur-3xl
          bg-black/20
            
        "
      >
        <SafeAreaView className="">
          <NotificationHeader />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Notification;
