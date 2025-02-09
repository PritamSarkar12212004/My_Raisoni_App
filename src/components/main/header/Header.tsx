import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { userContext } from "@/src/context/ContextApi";
import ImageView from "react-native-image-viewing";

const StudentProfile = () => {
  const { userDetails, profileImage } = userContext();
  const [visible, setIsVisible] = useState(false);
  const images = [
    {
      uri: profileImage,
    },
  ];
  return (
    <View className=" flex-row  gap-7   ">
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.8}>
        <Image
          source={{
            uri: profileImage,
          }}
          className="h-32 w-32 rounded-3xl"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View className="flex py-5">
        <Text className="text-xl text-warp font-thin text-wrap ">
          <Text className="font-bold text-wrap text-3xl text-[#7d73e6cc]">
            {userDetails.userFirstName.charAt(0)}
          </Text>
          {userDetails.userFirstName.slice(1)} {userDetails.middleName}{" "}
          {userDetails.lastName}
        </Text>
        <Text className="text-lgz font-thin">
          Rg No : {userDetails.registrationNumber}
        </Text>
        <Text className="text-lg font-thin">
          Roll No : {userDetails.rollNumber}
        </Text>
      </View>
    </View>
  );
};

export default StudentProfile;
