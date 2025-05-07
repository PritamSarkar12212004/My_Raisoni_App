import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { userContext } from "@/src/context/ContextApi";
import { ImageViewer } from "@/src/components/ImageViewer";
import { Image } from "expo-image";

interface UserDetails {
  userFirstName: string;
  middleName: string;
  lastName: string;
  registrationNumber: string;
  rollNumber: string;
}

interface UserContext {
  userDetails: UserDetails;
  profileImage: string;
}

const StudentProfile = () => {
  const { userDetails, profileImage } = userContext() as UserContext;
  const [visible, setIsVisible] = useState(false);
  const images = [
    {
      uri: profileImage,
    },
  ];
  return (
    <View className="flex-row gap-7">
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <View className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            source={{ uri: profileImage }}
            className="w-full h-full"
            contentFit="cover"
          />
        </View>
      </TouchableOpacity>
      <ImageViewer
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
     
      <View className="flex py-5">
        <Text className="text-xl text-warp font-semibold text-wrap text-white">
          <Text className="font-bold text-wrap text-3xl text-[#7d73e6cc] text-white">
            {userDetails.userFirstName.charAt(0)}
          </Text>
          {userDetails.userFirstName.slice(1)} {userDetails.middleName}{" "}
          {userDetails.lastName}
        </Text>
        <Text className="text-lgz font-semibold text-white">
          Reg No : {userDetails.registrationNumber}
        </Text>
        <Text className="text-lg font-semibold text-white">
          Roll No : {userDetails.rollNumber}
        </Text>
      </View>
    </View>
  );
};

export default StudentProfile;
